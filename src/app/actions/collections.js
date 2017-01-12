import {normalize, Schema, arrayOf} from 'normalizr'

const COLLECTION_SCHEMA_NAME = 'items'
export const FETCH_COLLECTION = 'FETCH_COLLECTION'
export const FETCH_COLLECTIONS = 'FETCH_COLLECTIONS'

/**
 * SCHEMA
 */

const itemSchema = new Schema(COLLECTION_SCHEMA_NAME, {
  idAttribute: (entity) => { // eslint-disable-line
    return entity.frontMatter.fileName
  }
})

const arrayOfItemsSchema = arrayOf(itemSchema)

/**
 * ACTIONS
 */

/**
 * Load item from collection.
 * @param  {String} collectionName - The collection name where the item will be stored (data folder name).
 * @param  {String} fileName       - The file name from the file that will be loaded.
 * @return {Object}                [description]
 */
export function loadItemFromCollection (collectionName, fileName) {
  if (!collectionName) {
    throw new Error('(actions)[collection] loadItemFromCollection: `collectionName` is required.')
  }
  if (!fileName) {
    throw new Error('(actions)[collection] loadItemFromCollection: `fileName` is required.')
  }

  return {
    type: `${collectionName}/${FETCH_COLLECTION}`,
    meta: {
      collectionName,
      fileName
    },
    payload: require(`lazy-loader!markdown-loader!src/data/${collectionName}/${fileName}.md`)().then((item) => { // eslint-disable-line
      return normalize(item, itemSchema).entities[COLLECTION_SCHEMA_NAME]
    })
  }
}

/**
 * Load items from collection.
 * @param  {String} collectionName - The collection name where the item will be stored (data folder name).
 * @return {Object}                [description]
 */
export function loadItemsFromCollection (collectionName) {
  if (!collectionName) {
    throw new Error('[collection] `collectionName` is required.')
  }

  return {
    type: `${collectionName}/${FETCH_COLLECTIONS}`,
    meta: {
      collectionName
    },
    payload: require(`lazy-dir-loader!src/data/${collectionName}.config.js`)().then((items) => { // eslint-disable-line
      return normalize(items, arrayOfItemsSchema).entities[COLLECTION_SCHEMA_NAME]
    })
  }
}
