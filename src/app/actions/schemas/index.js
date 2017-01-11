import {Schema, arrayOf} from 'normalizr'

export const item = new Schema('items', {
  idAttribute: (entity) => { // eslint-disable-line
    return entity.frontMatter.slug
  }
})

export const arrayOfItems = arrayOf(item)
