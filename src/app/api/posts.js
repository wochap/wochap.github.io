/**
 * get all posts' front-matter
 * @return {array} all posts
 */
export function getPosts () {
  return new Promise((resolve, reject) => {
    try {
      require.ensure([], (require) => {
        const postsContext = require.context('!!front-matter-loader!data/posts', true, /\.md$/)

        const posts = postsContext.keys().map((path) => {
          // extract file name from path file
          const fileName = (path.split('/').pop().split('.'))[0]
          const frontMatter = postsContext(`./${fileName}.md`)

          return {
            frontMatter: {
              slug: fileName,
              ...frontMatter
            }
          }
        })

        resolve(posts)
      }, 'posts')
    } catch (error) {
      reject(error)
    }
  })
}

/**
 * get post's bodyHTML and front-matter
 * @return {object} post
 */
export function getPost (fileName) {
  return new Promise((resolve, reject) => {
    try {
      const module = require(`lazy-loader!markdown-loader!data/posts/${fileName}.md`) // eslint-disable-line

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
