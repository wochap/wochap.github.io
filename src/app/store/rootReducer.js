import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import * as reducers from 'app/reducers'

const createRootReducer = history =>
  combineReducers({
    ...reducers,
    router: connectRouter(history),
  })

export default createRootReducer
