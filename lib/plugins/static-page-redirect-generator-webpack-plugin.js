const write = require('write')
const path = require('path')

module.exports = class CreateFilePlugin {
  constructor(options = {}) {
    this.options = options
  }

  // eslint-disable-next-line
  _createFile({paths, output}, compilation) {
    // eslint-disable-next-line
    for (const [filePath, redirectUrl] of Object.entries(paths)) {
      const fullPath = path.join(output, `${filePath}/index.html`)
      const contentData = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>Redirecting to ${redirectUrl}</title>
          <meta http-equiv="refresh" content="0; URL=${redirectUrl}">
          <link rel="canonical" href="${redirectUrl}">
        </head>
        <body>
        </body>
        </html>
      `
      write.sync(fullPath, contentData)
    }
  }

  apply(compiler) {
    compiler.hooks.emit.tapPromise('CreateFilePlugin', async compilation => {
      this._createFile(this.options, compilation)
    })
  }
}
