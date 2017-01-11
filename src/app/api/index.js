import {fetchAndFormatMarkdownFileFrom, getFormattedFilesFrom} from './utils'

export function getPost (fileName) {
  return fetchAndFormatMarkdownFileFrom({
    folderName: 'posts',
    fileName
  })
}

export function getPosts () {
  return new Promise((resolve, reject) => {
    try {
      // lazy load group of files
      require.ensure([], (require) => {
        const requireContext = require.context('!!front-matter-loader!data/posts', true, /\.md$/)

        resolve(getFormattedFilesFrom(requireContext))
      }, 'posts')
    } catch (error) {
      reject(error)
    }
  })
}

export function getWork (fileName) {
  return fetchAndFormatMarkdownFileFrom({
    folderName: 'works',
    fileName
  })
}

export function getWorks () {
  return new Promise((resolve, reject) => {
    try {
      // lazy load group of files
      require.ensure([], (require) => {
        const requireContext = require.context('!!front-matter-loader!data/works', true, /\.md$/)

        resolve(getFormattedFilesFrom(requireContext))
      }, 'works')
    } catch (error) {
      reject(error)
    }
  })
}
