import cheerio from 'cheerio' // eslint-disable-line

export default function template (bodyHTML = '') {
  return new Promise((resolve, reject) => {
    try {
      const markup = require('!!html-loader!../../dist/_static/index.html') // eslint-disable-line
      const $ = cheerio.load(markup)

      $('#root').append(bodyHTML)

      resolve($.html())
    } catch (error) {
      reject(error)
    }
  })
}
