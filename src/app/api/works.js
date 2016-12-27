/**
 * get all works' front-matter
 * @return {array} all works
 */
export function getWorks () {
  return new Promise((resolve, reject) => {
    try {
      require.ensure([], (require) => {
        const worksContext = require.context('!!front-matter-loader!data/works', true, /\.md$/)

        const works = worksContext.keys().map((path) => {
          // extract file name from path file
          const fileName = (path.split('/').pop().split('.'))[0]
          const frontMatter = worksContext(`./${fileName}.md`)

          return {
            frontMatter: {
              slug: fileName,
              ...frontMatter
            }
          }
        })

        resolve(works)
      }, 'works')
    } catch (error) {
      reject(error)
    }
  })
}

/**
 * get work's bodyHTML and front-matter
 * @return {object} work
 */
export function getWork (fileName) {
  return new Promise((resolve, reject) => {
    try {
      const module = require(`lazy-loader!markdown-loader!data/works/${fileName}.md`) // eslint-disable-line

      module().then((result) => {
        resolve({
          ...result,
          frontMatter: {
            slug: fileName,
            ...result.frontMatter
          }
        })
      })
    } catch (error) {
      reject(error)
    }
  })
}
