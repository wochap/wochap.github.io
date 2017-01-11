import {Schema, arrayOf} from 'normalizr'

export const post = createCollectionSchema('posts') // eslint-disable-line
export const arrayOfPosts = arrayOf(post)

export const work = createCollectionSchema('works') // eslint-disable-line
export const arrayOfWorks = arrayOf(work)

function createCollectionSchema (collectionName) {
  return new Schema(collectionName, {
    idAttribute: (entity) => { // eslint-disable-line
      return entity.frontMatter.slug
    }
  })
}
