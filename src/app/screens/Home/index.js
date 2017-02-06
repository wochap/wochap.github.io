import topBar from 'utils/topBar'

export default {
  getComponent (nextState, cb) {
    topBar.show()

    require.ensure([], (require) => {
      topBar.hide()

      cb(null, require('./components/HomeScreen').default) // eslint-disable-line
    }, 'HomeScreen')
  },
  layoutProps: {
    headerProps: {
      isFixed: true
    }
  }
}
