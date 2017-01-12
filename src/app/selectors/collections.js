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

export function getCollectionItemError ({collections}, collectionName, fileName) {
  sharedCollectionItemValidations('getCollectionItemError', collectionName, fileName)

  try {
    return !!collections[collectionName].data[fileName].error
  } catch (error) {
    console.warn(`${ERROR_NAMESPACE} getCollectionItemError: ${error}`) // eslint-disable-line
    return false
  }
}

export function isLoadingCollectionItem ({collections}, collectionName, fileName) {
  sharedCollectionItemValidations('isLoadingCollectionItem', collectionName, fileName)

  try {
    return !!collections[collectionName].data[fileName].isFetching
  } catch (error) {
    console.warn(`${ERROR_NAMESPACE} isLoadingCollectionItem: ${error}`) // eslint-disable-line
    return false
  }
}

export function isFulfilledCollectionItem ({collections}, collectionName, fileName) {
  sharedCollectionItemValidations('isFulfilledCollectionItem', collectionName, fileName)

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

export function getCollectionError ({collections}, collectionName) {
  sharedCollectionValidations('getCollectionError', collectionName)

  try {
    return !!collections[collectionName].error
  } catch (error) {
    console.warn(`${ERROR_NAMESPACE} getCollectionError: ${error}`) // eslint-disable-line
    return false
  }
}

export function isLoadingCollection ({collections}, collectionName) {
  sharedCollectionValidations('isLoadingCollection', collectionName)

  try {
    return !!collections[collectionName].isFetching
  } catch (error) {
    console.warn(`${ERROR_NAMESPACE} isLoadingCollection: ${error}`) // eslint-disable-line
    return false
  }
}

export function isFulfilledCollection ({collections}, collectionName) {
  sharedCollectionValidations('isFulfilledCollection', collectionName)

  try {
    return !!collections[collectionName].isFulfilled
  } catch (error) {
    console.warn(`${ERROR_NAMESPACE} isFulfilledCollection: ${error}`) // eslint-disable-line
    return false
  }
}
