import topBar from 'utils/topBar'

export default {
  path: 'contact',
  getComponent (nextState, cb) {
    topBar.show()

    require.ensure([], (require) => {
      topBar.hide()

      cb(null, require('./components/ContactScreen').default) // eslint-disable-line
    }, 'ContactScreen')
  }
}
