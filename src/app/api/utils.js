import deepMerge from 'deepmerge'

/**
 * Get markdown files using webpack api, and format the output.
 * @param  {String} folderName
 * @param  {String} fileName
 * @return {Promise}
 */

export function fetchAndFormatMarkdownFileFrom ({folderName, fileName}) {
  return new Promise((resolve, reject) => {
    try {
      const modulePromise = require(`lazy-loader!markdown-loader!src/data/${folderName}/${fileName}.md`) // eslint-disable-line

      modulePromise().then((result) => {
        resolve(
          // format output
          deepMerge(result, {
            frontMatter: {
              fileName,
              slug: fileName
            }
          })
        )
      })
    } catch (error) {
      reject(error)
    }
  })
}

/**
 * Get and format front-matter-loader output from require context.
 * @param  {require context} requireContext
 * @return {Array}
 */

export function getFormattedFilesFrom (requireContext) {
  return requireContext.keys().map((path) => {
    // extract file name from path file
    const fileName = (path.split('/').pop().split('.'))[0]

    // get module from context
    const module = requireContext(`./${fileName}.md`)

    // format object
    return {
      frontMatter: {
        ...module,
        fileName,
        slug: fileName
      }
    }
  })
}
