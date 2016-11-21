import React from 'react'
import ReactDOM from 'react-dom/server'
import App from 'app/App'
import template from './template'
import {AppContainer} from 'react-hot-loader' // eslint-disable-line

export default function render () {
  return new Promise(async (resolve, reject) => {
    try {
      const bodyHTML = ReactDOM.renderToString((
        <AppContainer>
          <App />
        </AppContainer>
      ))
      const html = await template(bodyHTML)

      console.log('\nhtml: ', html, '\n') // eslint-disable-line
      resolve(html)
    } catch (error) {
      reject(error)
    }
  })
}
