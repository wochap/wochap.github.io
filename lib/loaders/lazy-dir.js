module.exports = function (source) {
  const options = this.exec(source, this.resource)
  const loaders = options.loaders.reduce((loadersString, loader) => {
    return `${loadersString}${loader}!`
  }, '!!')

  const _module = `module.exports = function () {
    return new Promise(function (resolve, reject) {
      try {
        /* lazy load group of files */
        require.ensure([], function (require) {
          var requireContext = require.context('${loaders}${options.folderPath}', true, ${options.contextFilter})
          var modules = requireContext.keys().map(function (fileFullName) {
            return requireContext(fileFullName)
          })

          resolve(modules)
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
          var modules = requireContext.keys().forEach(requireContext)

          resolve(modules)
        }, 'posts')
      } catch (error) {
        reject(error)
      }
    })
  }
```
*/
