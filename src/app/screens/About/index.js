import topBar from 'utils/topBar'

export default {
  path: 'about',
  getComponents(nextState, cb) {
    topBar.show()

    require.ensure(
      [],
      require => {
        cb(null, require('./components/AboutScreen').default)

        topBar.hide()
      },
      'AboutScreen',
    )
  },
}
