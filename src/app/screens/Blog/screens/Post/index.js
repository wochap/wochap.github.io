// import {lazy} from 'react'
// import topBar from 'utils/topBar'

export default {
  path: ':fileName',
  component: require('./components/PostScreen').default,
  // component: lazy(async () => {
  //   topBar.show()
  //   const component = await import('./components/PostScreen')
  //   topBar.hide()
  //   return component
  // }),
  // getComponent(nextState, cb) {
  //   topBar.show()

  //   require.ensure(
  //     [],
  //     require => {
  //       cb(null, require('./components/PostScreen').default) // eslint-disable-line

  //       topBar.hide()
  //     },
  //     'PostScreen',
  //   )
  // },
  exact: true,
}
