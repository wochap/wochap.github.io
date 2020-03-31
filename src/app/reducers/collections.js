import deepMerge from 'deepmerge'
import * as collectionsActions from 'app/actions/collections'

function collection(
  state = {
    items: {},
  },
  type,
  payload,
) {
  switch (type) {
    case 'PENDING': {
      return {
        ...state,
        state: {
          error: false,
          isPending: true,
          isFulfilled: false,
        },
      }
    }
    case 'FULFILLED': {
      return deepMerge(state, {
        items: payload,
        state: {
          error: false,
          isPending: false,
          isFulfilled: true,
        },
      })
    }
    case 'REJECTED': {
      return deepMerge(state, {
        state: {
          error: payload,
          isPending: false,
          isFulfilled: true,
        },
      })
    }
    default: {
      return state
    }
  }
}

export default function collections(state = {}, {type, payload, meta}) {
  switch (type) {
    case `${collectionsActions.FETCH_COLLECTION}_PENDING`: {
      return {
        ...state,
        [meta.collectionName]: collection(state[meta.collectionName], 'PENDING'),
      }
    }
    case `${collectionsActions.FETCH_COLLECTION}_FULFILLED`: {
      return {
        ...state,
        [meta.collectionName]: collection(state[meta.collectionName], 'FULFILLED', payload),
      }
    }
    case `${collectionsActions.FETCH_COLLECTION}_REJECTED`: {
      return {
        ...state,
        [meta.collectionName]: collection(state[meta.collectionName], 'REJECTED', payload),
      }
    }

    case `${collectionsActions.FETCH_ITEM}_PENDING`: {
      return deepMerge(state, {
        [meta.collectionName]: {
          items: {
            [meta.fileName]: {
              state: {
                error: false,
                isPending: true,
                isFulfilled: false,
              },
            },
          },
        },
      })
    }
    case `${collectionsActions.FETCH_ITEM}_FULFILLED`: {
      return deepMerge(state, {
        [meta.collectionName]: {
          items: {
            [meta.fileName]: {
              ...payload[meta.fileName],
              state: {
                error: false,
                isPending: false,
                isFulfilled: true,
              },
            },
          },
        },
      })
    }
    case `${collectionsActions.FETCH_ITEM}_REJECTED`: {
      return deepMerge(state, {
        [meta.collectionName]: {
          items: {
            [meta.fileName]: {
              state: {
                error: payload,
                isPending: false,
                isFulfilled: true,
              },
            },
          },
        },
      })
    }

    default: {
      return state
    }
  }
}
