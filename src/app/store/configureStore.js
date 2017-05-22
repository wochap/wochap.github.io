import {createStore} from 'redux'
import rootReducer from './rootReducer'
import middlewares from './middlewares'

function configureStore (initialState) {
  const store = createStore(rootReducer, initialState, middlewares)

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer').default // eslint-disable-line

      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
