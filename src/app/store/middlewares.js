import {applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant' // eslint-disable-line

const debug = process.env.NODE_ENV === 'development'

const middlewares = debug ? compose(
    applyMiddleware(reduxImmutableStateInvariant(), thunk, promiseMiddleware()),

    // redux dev tools
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ) : compose(
    applyMiddleware(thunk, promiseMiddleware())
  )

export default middlewares
