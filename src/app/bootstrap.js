import topBar from 'topbar'
import moment from 'moment'

/**
 * POLYFILLS
 */

// eslint-disable-next-line
;(async () => {
  const platform = await import(/* webpackChunkName: 'platform' */ 'platform')
  document.querySelector('html').classList.add(platform.layout)
})()

/**
 * MODULES GLOBAL CONFIG
 */

moment.locale('es')

topBar.config({
  barThickness: 4,
  shadowColor: 'rgba(255, 255, 255, .5)',
})
