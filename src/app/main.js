import 'src/styles/main.scss'

import moment from 'moment'
import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader' // eslint-disable-line
import {Router, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import {syncHistoryWithStore} from 'react-router-redux'
import routes from 'app/config/routes'
import configureStore from './store/configureStore'

moment.locale('es')

const rootEl = document.getElementById('root')
const initialState = window.__INITIAL_STATE__ || undefined
const store = configureStore(initialState)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
  <AppContainer>
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  </AppContainer>),
  rootEl
)

if (module.hot) {
  module.hot.accept('app/config/routes', () => {
    const newRoutes = require('app/config/routes').default // eslint-disable-line

    // HMR async routes
    ReactDOM.unmountComponentAtNode(rootEl)

    ReactDOM.render((
      <AppContainer>
        <Provider store={store}>
          <Router history={browserHistory} routes={newRoutes} />
        </Provider>
      </AppContainer>),
      rootEl
    )
  })
}
