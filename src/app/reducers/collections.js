import deepMerge from 'deepmerge'
import * as collectionsActions from 'app/actions/collections'

export default function collections (state = {}, {type, payload, meta}) {
  if (!meta || !meta.collectionName) return state

  switch (type) {
    // Handle a single collection
    case `${meta.collectionName}/${collectionsActions.FETCH_COLLECTION}_PENDING`: {
      return deepMerge(state, {
        [meta.collectionName]: {
          data: {
            [meta.fileName]: {
              isFetching: true
            }
          }
        }
      })
    }
    case `${meta.collectionName}/${collectionsActions.FETCH_COLLECTION}_FULFILLED`: {
      return deepMerge(state, {
        [meta.collectionName]: {
          data: {
            [meta.fileName]: {
              frontMatter: payload[meta.fileName].frontMatter,
              bodyHtml: payload[meta.fileName].bodyHtml,
              isFulfilled: true,
              isFetching: false
            }
          }
        }
      })
    }
    case `${meta.collectionName}/${collectionsActions.FETCH_COLLECTION}_REJECTED`: {
      return deepMerge(state, {
        [meta.collectionName]: {
          data: {
            [meta.fileName]: {
              isFetching: false,
              error: payload
            }
          }
        }
      })
    }

    // Handle all collections
    case `${meta.collectionName}/${collectionsActions.FETCH_COLLECTIONS}_PENDING`: {
      return deepMerge(state, {
        [meta.collectionName]: {
          isFetching: true
        }
      })
    }
    case `${meta.collectionName}/${collectionsActions.FETCH_COLLECTIONS}_FULFILLED`: {
      return deepMerge(state, {
        [meta.collectionName]: {
          data: payload,
          isFulfilled: true,
          isFetching: false
        }
      })
    }

    case `${meta.collectionName}/${collectionsActions.FETCH_COLLECTIONS}_REJECTED`: {
      return deepMerge(state, {
        [meta.collectionName]: {
          isFetching: false,
          error: payload
        }
      })
    }

    default: {
      return state
    }
  }
}
