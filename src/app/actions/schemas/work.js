import {Schema, arrayOf} from 'normalizr'

export const work = new Schema('works', {
  idAttribute: (entity) => { // eslint-disable-line
    return entity.frontMatter.slug
  }
})

export const arrayOfWorks = arrayOf(work)
