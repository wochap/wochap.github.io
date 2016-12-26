import {Schema, arrayOf} from 'normalizr'

export const post = new Schema('posts', {
  idAttribute: (entity) => { // eslint-disable-line
    return entity.frontMatter.slug
  }
})

export const arrayOfPosts = arrayOf(post)
