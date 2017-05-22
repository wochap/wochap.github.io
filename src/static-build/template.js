import cheerio from 'cheerio' // eslint-disable-line

export default function template ({bodyHTML = '', headHTML = '', initialState}) {
  return new Promise((resolve, reject) => {
    try {
      const markup = require('!!html-loader!../../dist/index.html') // eslint-disable-line
      const $ = cheerio.load(markup)

      $('#root').append(bodyHTML)
      $('head link[rel=manifest]').before(headHTML)
      $('body').append(`<script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};</script>`)

      resolve($.html())
    } catch (error) {
      reject(error)
    }
  })
}
