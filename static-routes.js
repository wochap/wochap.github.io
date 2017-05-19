const fs = require('fs')
const {resolve} = require('path')

const sourcePath = resolve(__dirname, 'src')
// create posts routes
const postsRoutes = getFileNamesArrayFrom(resolve(sourcePath, 'data/posts')).map(fileName => `/blog/${fileName}`)
// create works routes
const worksRoutes = getFileNamesArrayFrom(resolve(sourcePath, 'data/works')).map(fileName => `/works/${fileName}`)

// exports routes that static-site-generator-webpack-plugin will build
module.exports = [
  '/',
  '/about',
  '/works',
  '/blog',
  '/contact',
  '/404.html',
  ...postsRoutes,
  ...worksRoutes
]

/**
 * UTILS
 */

/**
 * Get file names array from folder.
 * @param {String} folderPath - Absolute folder path.
 * @return {Array}
 */
function getFileNamesArrayFrom (folderPath) {
  // get all files in folder
  const files = fs.readdirSync(folderPath)

  // create all possible works routes
  return files.map((path) => {
    // extract file name from path of file
    return (path.split('/').pop().split('.'))[0]
  })
}
