// import {lazy} from 'react'
// import topBar from 'utils/topBar'

export default {
  path: 'contact',
  component: require('./components/ContactScreen').default,
  // component: lazy(async () => {
  //   topBar.show()
  //   const component = await import('./components/ContactScreen')
  //   topBar.hide()
  //   return component
  // }),
  // getComponent(nextState, cb) {
  //   topBar.show()

  //   require.ensure(
  //     [],
  //     require => {
  //       topBar.hide()

  //       cb(null, require('./components/ContactScreen').default) // eslint-disable-line
  //     },
  //     'ContactScreen',
  //   )
  // },
  exact: true,
}
