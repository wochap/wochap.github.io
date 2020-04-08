const {getOptions} = require('loader-utils')

module.exports = function (source) {
  const options = getOptions(this)
  const {documentEventName = 'lazyDirLoaderFilesChange', injectHmrHack = true} = options
  const subOptions = this.exec(source, this.resource)
  const loaders = subOptions.loaders.reduce((loadersString, loader) => {
    return `${loadersString}${loader}!`
  }, '!!')

  const _module = `
    module.exports = new Promise(function (resolve, reject) {
      try {
        /* lazy load group of files */
        require.ensure([], function (require) {
          var requireContext = require.context('${loaders}${subOptions.folderPath}', true, ${subOptions.contextFilter});
          var modules = requireContext.keys().map(function (fileFullName) {
            return requireContext(fileFullName);
          });

          resolve(modules);
        }, 'data.${subOptions.chunkName}')
      } catch (error) {
        reject(error);
      }
    });

    if (module.hot && ${injectHmrHack}) {
      module.hot.dispose(data => {
        data.updated = true;
      });
      if (module.hot.data && module.hot.data.updated) {
        const event = new CustomEvent( '${documentEventName}' );
        document.dispatchEvent(event);
      }
      module.hot.accept();
    }
  `

  return _module
}

/*
Input file:

```js
import myPosts from 'lazy-dir-loader!./posts.js'
```

post.js:
```js
export default {
  chunkName: 'posts',
  folderPath: 'src/data/posts',
  contextFilter: /\.md$/,
  loaders: [
    'front-matter-loader'
  ]
}
```

Output format:

```js
module.exports = function () {
  return new Promise(function (resolve, reject) {
    try {
      // lazy load group of files
      require.ensure([], function (require) {
        var requireContext = require.context('!!front-matter-loader!src/data/posts', true, /\.md$/)
        var modules = requireContext.keys().forEach(requireContext)

        resolve(modules)
      }, 'posts')
    } catch (error) {
      reject(error)
    }
  })
}

if (module.hot) {
  module.hot.dispose(data => {
    data.updated = true;
  });
  if (module.hot.data && module.hot.data.updated) {
    const event = new CustomEvent('lazyDirLoaderFilesChange');
    document.dispatchEvent(event);
  }
  module.hot.accept();
}
```
*/
