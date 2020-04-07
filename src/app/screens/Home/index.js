// import {lazy} from 'react'
// import topBar from 'utils/topBar'

export default {
  component: require('./components/HomeScreen').default,
  // component: lazy(async () => {
  //   topBar.show()
  //   const component = await import('./components/HomeScreen')
  //   topBar.hide()
  //   return component
  // }),
  // getComponent(nextState, cb) {
  //   topBar.show()

  //   require.ensure(
  //     [],
  //     require => {
  //       topBar.hide()

  //       cb(null, require('./components/HomeScreen').default) // eslint-disable-line
  //     },
  //     'HomeScreen',
  //   )
  // },
  layoutProps: {
    headerProps: {
      isFixed: true,
      isHome: true,
    },
  },
  exact: true,
}
