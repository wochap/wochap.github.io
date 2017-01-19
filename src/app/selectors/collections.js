const ERROR_NAMESPACE = '(selectors)[collections]'

/**
 * COLLECTION ITEM SELECTORS
 */

function sharedItemValidations (functionName, collectionName, fileName) {
  if (!collectionName) {
    throw new Error(`${ERROR_NAMESPACE} ${functionName}: 'collectionName' is required.`)
  }
  if (!fileName) {
    throw new Error(`${ERROR_NAMESPACE} ${functionName}: 'fileName' is required.`)
  }
}

export function getItem ({collections}, collectionName, fileName) {
  sharedItemValidations('getItem', collectionName, fileName)

  try {
    return collections[collectionName].data[fileName]
  } catch (error) {
    console.warn(`${ERROR_NAMESPACE} getItem: ${error}`) // eslint-disable-line
    return {}
  }
}

export function getItemState (state, collectionName, fileName) {
  sharedItemValidations('getItemState', collectionName, fileName)

  return {
    isPending: isPendingItem(state, collectionName, fileName), // eslint-disable-line
    isFulfilled: isFulfilledItem(state, collectionName, fileName), // eslint-disable-line
    error: getItemError(state, collectionName, fileName) // eslint-disable-line
  }
}

function getItemError ({collections}, collectionName, fileName) {
  try {
    return !!collections[collectionName].data[fileName].error
  } catch (error) {
    console.warn(`${ERROR_NAMESPACE} getItemError: ${error}`) // eslint-disable-line
    return false
  }
}

function isPendingItem ({collections}, collectionName, fileName) {
  try {
    return !!collections[collectionName].data[fileName].isFetching
  } catch (error) {
    console.warn(`${ERROR_NAMESPACE} isPendingItem: ${error}`) // eslint-disable-line
    return false
  }
}

function isFulfilledItem ({collections}, collectionName, fileName) {
  try {
    return !!collections[collectionName].data[fileName].isFulfilled
  } catch (error) {
    console.warn(`${ERROR_NAMESPACE} isFulfilledItem: ${error}`) // eslint-disable-line
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
