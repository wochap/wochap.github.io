import {createStore} from 'redux'
import createRootReducer from './rootReducer'
import middlewares from './middlewares'

function configureStore(initialState, history) {
  const rootReducer = createRootReducer(history)
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
