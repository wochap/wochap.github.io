const {getOptions} = require('loader-utils')
const path = require('path')
const getFileName = require('../get-file-name')

module.exports = function () {}
module.exports.pitch = function (remainingRequest) {
  const options = getOptions(this)
  const fileFullName = path.basename(remainingRequest)
  const fileName = getFileName(fileFullName)
  const {documentEventName = 'lazyLoaderFileChange', chunkName = fileName, injectHmrHack = true} = options

  return `
    module.exports = new Promise(function (resolve) {
      require.ensure([], function (require) {
        resolve(require( '!!${remainingRequest}' ));
      }, ${chunkName ? `'data.${chunkName}'` : 'undefined'} );
    });

    if (module.hot && ${injectHmrHack}) {
      module.hot.dispose(data => {
        data.updated = true;
      });
      if (module.hot.data && module.hot.data.updated) {
        var event = new CustomEvent( '${documentEventName}' );
        document.dispatchEvent(event);
      }
      module.hot.accept();
    }
  `
}

/*
Input file:

```js
const file = await require('lazy-loader?{"documentEventName":"PEPITO"}!markdown-loader!./my-post.md')
```

Output format:

```js
const file = await new Promise(function (resolve) {
  require.ensure([], function (require) {
    resolve(require('markdown-loader!./my-post.md'))
  }, 'data.my-post')
})

if (module.hot) {
  module.hot.dispose(data => {
    data.updated = true;
  });
  if (module.hot.data && module.hot.data.updated) {
    const event = new CustomEvent('PEPITO');
    document.dispatchEvent(event);
  }
  module.hot.accept();
}
```
*/
