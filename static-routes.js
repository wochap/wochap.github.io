const fs = require('fs')
const {resolve} = require('path')

const dataPath = resolve(__dirname, 'data')
// create posts routes
const postsRoutes = getFileNamesArrayFrom(resolve(dataPath, 'posts')).map(fileName => `/blog/${fileName}`) // eslint-disable-line
// create works routes
const worksRoutes = getFileNamesArrayFrom(resolve(dataPath, 'works')).map(fileName => `/works/${fileName}`) // eslint-disable-line

// exports routes that static-site-generator-webpack-plugin will build
module.exports = ['/', '/about', '/works', '/blog', '/contact', '/404.html', ...postsRoutes, ...worksRoutes]

/**
 * UTILS
 */

/**
 * Get file names array from folder.
 * @param {String} folderPath - Absolute folder path.
 * @return {Array}
 */
function getFileNamesArrayFrom(folderPath) {
  // get all files in folder
  const files = fs.readdirSync(folderPath)

  // create all possible works routes
  return (
    files
      // eslint-disable-next-line
      .filter(path => new RegExp('^(?!.*\.draft\.' + process.env.SSG_LANG + '\.md$).*\.' + process.env.SSG_LANG + '\.md$', 'i').test(path))
      .map(path => {
        // extract file name from path of file
        return path.split('/').pop().split('.')[0]
      })
  )
}
