import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import * as reducers from 'app/reducers'

const rootReducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

export default rootReducer
