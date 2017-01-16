const ERROR_NAMESPACE = '(selectors)[collections]'

/**
 * COLLECTION ITEM SELECTORS
 */

function sharedCollectionItemValidations (functionName, collectionName, fileName) {
  if (!collectionName) {
    throw new Error(`${ERROR_NAMESPACE} ${functionName}: 'collectionName' is required.`)
  }
  if (!fileName) {
    throw new Error(`${ERROR_NAMESPACE} ${functionName}: 'fileName' is required.`)
  }
}

export function getItemFromCollection ({collections}, collectionName, fileName) {
  sharedCollectionItemValidations('getItemFromCollection', collectionName, fileName)

  try {
    return collections[collectionName].data[fileName]
  } catch (error) {
    console.warn(`${ERROR_NAMESPACE} getItemFromCollection: ${error}`) // eslint-disable-line
    return {}
  }
}

export function getCollectionItemState (state, collectionName, fileName) {
  sharedCollectionItemValidations('getCollectionItemError', collectionName, fileName)

  return {
    isPending: isPendingCollectionItem(state, collectionName, fileName), // eslint-disable-line
    isFulfilled: isFulfilledCollectionItem(state, collectionName, fileName), // eslint-disable-line
    error: getCollectionItemError(state, collectionName, fileName) // eslint-disable-line
  }
}

function getCollectionItemError ({collections}, collectionName, fileName) {
  try {
    return !!collections[collectionName].data[fileName].error
  } catch (error) {
    console.warn(`${ERROR_NAMESPACE} getCollectionItemError: ${error}`) // eslint-disable-line
    return false
  }
}

function isPendingCollectionItem ({collections}, collectionName, fileName) {
  try {
    return !!collections[collectionName].data[fileName].isFetching
  } catch (error) {
    console.warn(`${ERROR_NAMESPACE} isPendingCollectionItem: ${error}`) // eslint-disable-line
    return false
  }
}

function isFulfilledCollectionItem ({collections}, collectionName, fileName) {
  try {
    return !!collections[collectionName].data[fileName].isFulfilled
  } catch (error) {
    console.warn(`${ERROR_NAMESPACE} isFulfilledCollectionItem: ${error}`) // eslint-disable-line
    return false
  }
}

/**
 * COLLECTION SELECTORS
 */

function sharedCollectionValidations (functionName, collectionName) {
  if (!collectionName) {
    throw new Error(`${ERROR_NAMESPACE} ${functionName}: 'collectionName' is required.`)
  }
}

export function getCollection ({collections}, collectionName) {
  sharedCollectionValidations('getCollection', collectionName)

  try {
    // TODO: improve code
    return Object.values(collections[collectionName].data).map(p => p)
  } catch (error) {
    console.warn(`${ERROR_NAMESPACE} getCollection: ${error}`) // eslint-disable-line
    return []
  }
}

export function getCollectionState (state, collectionName) {
  sharedCollectionValidations('getCollectionError', collectionName)

  return {
    isPending: isPendingCollection(state, collectionName), // eslint-disable-line
    isFulfilled: isFulfilledCollection(state, collectionName), // eslint-disable-line
    error: getCollectionError(state, collectionName) // eslint-disable-line
  }
}

function getCollectionError ({collections}, collectionName) {
  try {
    return !!collections[collectionName].error
  } catch (error) {
    console.warn(`${ERROR_NAMESPACE} getCollectionError: ${error}`) // eslint-disable-line
    return false
  }
}

function isPendingCollection ({collections}, collectionName) {
  try {
    return !!collections[collectionName].isFetching
  } catch (error) {
    console.warn(`${ERROR_NAMESPACE} isPendingCollection: ${error}`) // eslint-disable-line
    return false
  }
}

function isFulfilledCollection ({collections}, collectionName) {
  try {
    return !!collections[collectionName].isFulfilled
  } catch (error) {
    console.warn(`${ERROR_NAMESPACE} isFulfilledCollection: ${error}`) // eslint-disable-line
    return false
  }
}
