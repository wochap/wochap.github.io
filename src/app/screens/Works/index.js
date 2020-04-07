// import {lazy} from 'react'
// import topBar from 'utils/topBar'
import Works from './screens/Works'
import Work from './screens/Work'

export default {
  path: 'works',
  component: require('./components/WorksScreen').default,
  // component: lazy(async () => {
  //   topBar.show()
  //   const component = await import('./components/WorksScreen')
  //   topBar.hide()
  //   return component
  // }),
  // getComponent(nextState, cb) {
  //   topBar.show()

  //   require.ensure(
  //     [],
  //     require => {
  //       topBar.hide()

  //       cb(null, require('./components/WorksScreen').default) // eslint-disable-line
  //     },
  //     'WorksScreen',
  //   )
  // },
  indexRoute: Works,
  childRoutes: [Work],
  exact: false,
}
