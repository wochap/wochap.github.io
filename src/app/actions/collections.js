import moment from 'moment'
import {normalize, Schema, arrayOf} from 'normalizr'
import {COLLECTION_DATE_FORMAT} from 'app/config/constants'

const COLLECTION_SCHEMA_NAME = 'items'
export const FETCH_ITEM = 'collections/FETCH_ITEM'
export const FETCH_COLLECTION = 'collections/FETCH_COLLECTION'

/**
 * SCHEMA
 */

const itemSchema = new Schema(COLLECTION_SCHEMA_NAME, {
  idAttribute: entity => {
    return entity.frontMatter.fileName
  },
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
export function loadItem(collectionName, fileName) {
  if (!collectionName) {
    throw new Error('(actions)[collection] loadItem: `collectionName` is required.')
  }
  if (!fileName) {
    throw new Error('(actions)[collection] loadItem: `fileName` is required.')
  }

  let fileRequest
  try {
    // eslint-disable-next-line
    fileRequest = generateFileRequest({collectionName, fileName, withDraftExt: false})
  } catch (error) {
    fileRequest = Promise.reject(error)
  }

  return {
    type: FETCH_ITEM,
    meta: {
      collectionName,
      fileName,
    },
    payload: fileRequest.then(item => {
      return normalize(item, itemSchema).entities[COLLECTION_SCHEMA_NAME]
    }),
  }
}

/**
 * Load items from collection.
 * @param  {String} collectionName - The collection name where the item will be stored (data folder name).
 * @return {Object}                [description]
 */
export function loadCollection(collectionName) {
  if (!collectionName) {
    throw new Error('(actions)[collection] loadCollection: `collectionName` is required.')
  }

  let filesRequest
  try {
    // eslint-disable-next-line
    filesRequest = require('lazy-dir-loader?{"documentEventName":"lazyDirLoaderFilesChange"}!data/' + collectionName + '.config.js')
  } catch (error) {
    filesRequest = Promise.reject(error)
  }

  return {
    type: FETCH_COLLECTION,
    meta: {
      collectionName,
    },
    payload: filesRequest.then(items => {
      // eslint-disable-next-line
      items.sort(orderByDate)
      return normalize(items, arrayOfItemsSchema).entities[COLLECTION_SCHEMA_NAME]
    }),
  }
}

function orderByDate(a, b) {
  const aDate = moment(a.frontMatter.date, COLLECTION_DATE_FORMAT).toDate()
  const bDate = moment(b.frontMatter.date, COLLECTION_DATE_FORMAT).toDate()

  if (aDate > bDate) {
    return -1
  }

  if (aDate < bDate) {
    return 1
  }

  return 0
}

function generateFileRequest({collectionName, fileName, withDraftExt = false}) {
  try {
    // eslint-disable-next-line
    return require('lazy-loader?{"documentEventName":"lazyLoaderFileChange"}!markdown-loader!data/' +
      collectionName +
      '/' +
      fileName +
      // eslint-disable-next-line
      `${withDraftExt ? '.draft' : ''}` +
      `.${process.env.SSG_LANG}` +
      '.md')
  } catch (error) {
    if (withDraftExt === true) {
      throw error
    }
    return generateFileRequest({collectionName, fileName, withDraftExt: true})
  }
}
