import React from 'react'
import ReactDOM from 'react-dom/server'
import {match, RouterContext, createMemoryHistory} from 'react-router'
import {Provider} from 'react-redux'
import {syncHistoryWithStore} from 'react-router-redux'
import Helmet from 'react-helmet'
import {AppContainer} from 'react-hot-loader' // eslint-disable-line
import routes from 'app/config/routes'
import configureStore from 'app/store/configureStore'
import * as collectionActions from 'app/actions/collections'
import template from './template'

export default function render(locals) {
  return new Promise((resolve, reject) => {
    try {
      const memoryHistory = createMemoryHistory()
      const store = configureStore()
      const history = syncHistoryWithStore(memoryHistory, store)
      const location = history.createLocation(locals.path)

      match({routes, location}, async (error, redirectLocation, renderProps) => {
        if (error) throw error

        const {fileName} = renderProps.params
        const {pathname} = renderProps.location

        if (pathname === '/blog' || pathname === '/') {
          await store.dispatch(collectionActions.loadCollection('posts'))
        }
        if (pathname === '/works' || pathname === '/') {
          await store.dispatch(collectionActions.loadCollection('works'))
        }
        if (fileName && pathname.includes('/blog/')) {
          await store.dispatch(collectionActions.loadItem('posts', fileName))
        }
        if (fileName && pathname.includes('/works/')) {
          await store.dispatch(collectionActions.loadItem('works', fileName))
        }

        const bodyHTML = ReactDOM.renderToString(
          <AppContainer>
            <Provider store={store}>
              <RouterContext {...renderProps} />
            </Provider>
          </AppContainer>,
        )
        const head = Helmet.rewind()
        const headHTML = `
          ${head.title.toString()}
          ${head.meta.toString()}
        `
        const initialState = store.getState()
        const html = await template({bodyHTML, headHTML, initialState})

        console.log('\nCurrent path: ', locals.path) // eslint-disable-line
        console.log('\nhtml: ', html.substr(-400), '\n') // eslint-disable-line

        resolve(html)
      })
    } catch (error) {
      reject(error)
    }
  })
}
