import topBar from 'utils/topBar'
import Works from './screens/Works'
import Work from './screens/Work'

export default {
  path: 'works',
  getComponent (nextState, cb) {
    topBar.show()

    require.ensure([], (require) => {
      topBar.hide()

      cb(null, require('./components/WorksScreen').default) // eslint-disable-line
    }, 'WorksScreen')
  },
  indexRoute: Works,
  childRoutes: [
    Work
  ]
}
