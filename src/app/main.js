import 'src/styles/main.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader' // eslint-disable-line
import {Router, browserHistory} from 'react-router'
import routes from 'app/config/routes'

const rootEl = document.getElementById('root')

ReactDOM.render((
  <AppContainer>
    <Router history={browserHistory} routes={routes} />
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
        <Router history={browserHistory} routes={newRoutes} />
      </AppContainer>),
      rootEl
    )
  })
}
