import React from 'react'
import ReactDOM from 'react-dom/server'
import {Router, matchPath} from 'react-router-dom'
import {ConnectedRouter} from 'connected-react-router'
import {createMemoryHistory} from 'history'
import {Provider, ReactReduxContext} from 'react-redux'
import Helmet from 'react-helmet'
import generateRoutes from 'app/config/generateRoutes'
import routes from 'app/config/routes'
import configureStore from 'app/store/configureStore'
import * as collectionActions from 'app/actions/collections'
import template from './template'

export default function render(locals) {
  function matchPathToCurrentRoute(urlPattern) {
    return matchPath(locals.path, {
      path: urlPattern,
      exact: true,
    })
  }
  return new Promise((resolve, reject) => {
    ;(async () => {
      try {
        const pathname = locals.path
        const history = createMemoryHistory({
          initialEntries: [pathname],
        })
        const store = configureStore(undefined, history)
        const context = {}
        const match = matchPathToCurrentRoute('/works/:fileName') || matchPathToCurrentRoute('/blog/:fileName')
        const fileName = match?.params?.fileName

        if (['/blog', '/blog/'].includes(pathname) || pathname === '/') {
          await store.dispatch(collectionActions.loadCollection('posts'))
        }
        if (['/works', '/works/'].includes(pathname) || pathname === '/') {
          await store.dispatch(collectionActions.loadCollection('works'))
        }
        if (fileName && pathname.includes('/blog/')) {
          await store.dispatch(collectionActions.loadItem('posts', fileName))
        }
        if (fileName && pathname.includes('/works/')) {
          await store.dispatch(collectionActions.loadItem('works', fileName))
        }

        const bodyHTML = ReactDOM.renderToString(
          <Provider store={store} context={ReactReduxContext}>
            <ConnectedRouter history={history} context={ReactReduxContext}>
              <Router history={history} location={pathname} context={context}>
                {generateRoutes(routes)}
              </Router>
            </ConnectedRouter>
          </Provider>,
        )

        const head = Helmet.renderStatic()
        const headHTML = `
        ${head.title.toString()}
        ${head.meta.toString()}
      `
        const initialState = store.getState()
        const html = await template({bodyHTML, headHTML, initialState})
        console.log('\nCurrent path: ', pathname)
        console.log('\nhtml: ', html.substr(-400), '\n')

        resolve(html)
      } catch (error) {
        console.error(error)
        reject(error)
      }
    })()
  })
}
