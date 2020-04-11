import {applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant' // eslint-disable-line

const debug = process.env.NODE_ENV === 'development'

const middlewares = debug
  ? compose(
      applyMiddleware(reduxImmutableStateInvariant(), thunk, promiseMiddleware),

      // redux dev tools
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__({
            trace: true,
            traceLimit: 5,
          })
        : f => f,
    )
  : compose(applyMiddleware(thunk, promiseMiddleware))

export default middlewares
