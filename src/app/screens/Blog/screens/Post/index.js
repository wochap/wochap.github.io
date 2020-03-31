import topBar from 'utils/topBar'

export default {
  path: ':fileName',
  getComponent(nextState, cb) {
    topBar.show()

    require.ensure(
      [],
      require => {
        cb(null, require('./components/PostScreen').default) // eslint-disable-line

        topBar.hide()
      },
      'PostScreen',
    )
  },
}
