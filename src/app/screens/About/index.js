// import {lazy} from 'react'
// import topBar from 'utils/topBar'

export default {
  path: 'about',
  component: require('./components/AboutScreen').default,
  // component: lazy(async () => {
  //   topBar.show()
  //   const component = await import('./components/AboutScreen')
  //   topBar.hide()
  //   return component
  // }),
  // getComponent(nextState, cb) {
  //   topBar.show()

  //   require.ensure(
  //     [],
  //     require => {
  //       cb(null, require('./components/AboutScreen').default)

  //       topBar.hide()
  //     },
  //     'AboutScreen',
  //   )
  // },
  exact: true,
}
