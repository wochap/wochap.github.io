import React from 'react'
import ReactDOM from 'react-dom/server'
import {match, RouterContext, createMemoryHistory} from 'react-router'
import Helmet from 'react-helmet'
import {AppContainer} from 'react-hot-loader' // eslint-disable-line
import routes from 'app/config/routes'
import template from './template'

export default function render (locals) {
  return new Promise((resolve, reject) => {
    try {
      const history = createMemoryHistory()
      const location = history.createLocation(locals.path)

      match({routes, location}, async (error, redirectLocation, renderProps) => {
        if (error) throw error

        const bodyHTML = ReactDOM.renderToString((
          <AppContainer>
            <RouterContext {...renderProps} />
          </AppContainer>
        ))
        const head = Helmet.rewind()
        const headHTML = `
          ${head.title.toString()}
          ${head.meta.toString()}
        `
        const html = await template(bodyHTML, headHTML)

        console.log('\nCurrent path: ', locals.path) // eslint-disable-line
        console.log('\nhtml: ', html, '\n') // eslint-disable-line

        resolve(html)
      })
    } catch (error) {
      reject(error)
    }
  })
}
