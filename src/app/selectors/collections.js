const ERROR_NAMESPACE = '(selectors)[collections]'

/**
 * COLLECTION ITEM SELECTORS
 */

function sharedItemValidations(functionName, collectionName, fileName) {
  if (!collectionName) {
    throw new Error(`${ERROR_NAMESPACE} ${functionName}: 'collectionName' is required.`)
  }
  if (!fileName) {
    throw new Error(`${ERROR_NAMESPACE} ${functionName}: 'fileName' is required.`)
  }
}

export function getItem({collections}, collectionName, fileName) {
  sharedItemValidations('getItem', collectionName, fileName)

  try {
    return collections[collectionName].items[fileName]
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`${ERROR_NAMESPACE} getItem: ${error}`) // eslint-disable-line
    }
    return {}
  }
}

export function getItemState({collections}, collectionName, fileName) {
  sharedItemValidations('getItemState', collectionName, fileName)

  try {
    if (!collections[collectionName].items[fileName].state) {
      throw new Error(`${fileName} has not loaded`)
    }

    return collections[collectionName].items[fileName].state
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`${ERROR_NAMESPACE} getItemState: ${error}`) // eslint-disable-line
    }

    return {
      isPending: false,
      isFulfilled: false,
      error: false,
    }
  }
}

/**
 * COLLECTION SELECTORS
 */

function sharedCollectionValidations(functionName, collectionName) {
  if (!collectionName) {
    throw new Error(`${ERROR_NAMESPACE} ${functionName}: 'collectionName' is required.`)
  }
}

export function getCollection({collections}, collectionName) {
  sharedCollectionValidations('getCollection', collectionName)

  try {
    // TODO: improve code
    return Object.values(collections[collectionName].items).map(p => p)
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`${ERROR_NAMESPACE} getCollection: ${error}`) // eslint-disable-line
    }
    return []
  }
}

export function getCollectionState({collections}, collectionName) {
  sharedCollectionValidations('getCollectionError', collectionName)

  try {
    if (!collections[collectionName].state) {
      throw new Error(`${collectionName} has not loaded`)
    }

    return collections[collectionName].state
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`${ERROR_NAMESPACE} getCollectionState: ${error}`) // eslint-disable-line
    }

    return {
      isPending: false,
      isFulfilled: false,
      error: false,
    }
  }
}
