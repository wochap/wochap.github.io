import Work from './screens/Work'
import Works from './screens/Works'

export default {
  path: 'works',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/WorksScreen').default) // eslint-disable-line
    }, 'WorksScreen')
  },
  indexRoute: Works,
  childRoutes: [
    Work
  ]
}
