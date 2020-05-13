import 'src/styles/main.scss'
import 'src/app/bootstrap'
import {hydrate, unmountComponentAtNode, render} from 'react-dom'
import React from 'react'
import {Router} from 'react-router-dom'
import {ConnectedRouter} from 'connected-react-router'
import {createBrowserHistory} from 'history'
import {Provider, ReactReduxContext} from 'react-redux'
import generateRoutes from 'app/config/generateRoutes'
import routes from 'app/config/routes'
import configureStore from './store/configureStore'

const rootEl = document.getElementById('root')
const initialState = window.__INITIAL_STATE__ || undefined
const history = createBrowserHistory()
const store = configureStore(initialState, history)
const renderStrategy = process.env.NODE_ENV === 'production' ? hydrate : render

// async load katex css
// eslint-disable-next-line
import(/* webpackChunkName: 'katex' */ 'katex/dist/katex.css')

// setup GTM
window.dataLayer = window.dataLayer || []

// load markdown code theme css
let removePrevTheme = () => {}
async function onThemeChange() {
  const theme = window.__theme
  removePrevTheme()
  const {use, unuse} = await import(
    // eslint-disable-next-line
    '!!style-loader?{"injectType":"lazyStyleTag"}!css-loader!postcss-loader!highlight.js/styles/atom-one-' + theme + '.css'
  )
  use()
  removePrevTheme = unuse
}
document.addEventListener(window.__themeChangeEvent, onThemeChange)
onThemeChange()

renderStrategy(
  <Provider store={store} context={ReactReduxContext}>
    <ConnectedRouter history={history} context={ReactReduxContext}>
      <Router history={history}>{generateRoutes(routes)}</Router>
    </ConnectedRouter>
  </Provider>,
  rootEl,
)

if (module.hot) {
  module.hot.accept('app/config/routes', () => {
    const newRoutes = require('app/config/routes').default

    unmountComponentAtNode(rootEl)
    render(
      <Provider store={store} context={ReactReduxContext}>
        <ConnectedRouter history={history} context={ReactReduxContext}>
          <Router history={history}>{generateRoutes(newRoutes)}</Router>
        </ConnectedRouter>
      </Provider>,
      rootEl,
    )
  })
}
