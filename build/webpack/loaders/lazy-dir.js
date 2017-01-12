module.exports = function (source) {
  this.cacheable && this.cacheable()

  const options = this.exec(source, this.resource).default
  const loaders = options.loaders.reduce((loadersString, loader) => {
    return `${loadersString}${loader}!`
  }, '!!')

  const _module = `module.exports = function () {
    return new Promise(function (resolve, reject) {
      try {
        /* lazy load group of files */
        require.ensure([], function (require) {
          var requireContext = require.context('${loaders}${options.folderPath}', true, ${options.contextFilter})
          var array = requireContext.keys().map(function (path) {
            /* extract file name from path file */
            var fileName = (path.split('/').pop().split('.'))[0]

            /* get module from context */
            return requireContext('./' + fileName + '.md')
          })

          resolve(array)
        }, '${options.chunkName}')
      } catch (error) {
        reject(error)
      }
    })
  }`

  return _module
}


/*
Input file:

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
        /* lazy load group of files *//*
        require.ensure([], function (require) {
          var requireContext = require.context('!!front-matter-loader!src/data/posts', true, /\.md$/)
          var array = requireContext.keys().map(function (path) {
            /* extract file name from path file *//*
            var fileName = (path.split('/').pop().split('.'))[0]

            /* get module from context *//*
            return requireContext('./' + fileName + '.md')
          })

          resolve(array)
        }, 'posts')
      } catch (error) {
        reject(error)
      }
    })
  }
```
*/
