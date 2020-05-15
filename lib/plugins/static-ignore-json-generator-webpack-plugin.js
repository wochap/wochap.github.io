const write = require('write')
const path = require('path')

module.exports = class CreateFilePlugin {
  constructor(options = {}) {
    this.options = options
  }

  // eslint-disable-next-line
  _createFile({paths, output}, compilation) {
    const fullPath = path.join(output, 'ignore.json')
    const contentData = JSON.stringify(paths)
    write.sync(fullPath, contentData)
  }

  apply(compiler) {
    compiler.hooks.emit.tapPromise('CreateFilePlugin', async compilation => {
      this._createFile(this.options, compilation)
    })
  }
}
