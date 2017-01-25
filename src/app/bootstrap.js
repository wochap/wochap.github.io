import topBar from 'topbar'
import moment from 'moment'

/**
 * POLYFILLS
 */

if (!window.Promise) {
  require.ensure([], (require) => {
    window.Promise = require('promise-polyfill')
  }, 'promise-polyfill')
}

if (!String.prototype.includes) {
  require.ensure([], (require) => {
    require('string.prototype.includes')
  }, 'string-prototype-includes')
}

require.ensure([], (require) => {
  const platform = require('platform')
  window._platform = platform
  document.querySelector('html').classList.add(platform.layout)
}, 'platform')

/**
 * MODULES GLOBAL CONFIG
 */

moment.locale('es')

topBar.config({
  barThickness: 12,
  barColors: [
    '#000000'
  ],
  shadowColor: 'rgba(255, 255, 255, .5)'
})
