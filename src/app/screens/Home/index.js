export default {
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/HomeScreen').default) // eslint-disable-line
    }, 'HomeScreen')
  }
}
