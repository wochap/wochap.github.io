export default {
  getComponent (location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/HomeScreen').default) // eslint-disable-line
    }, 'HomeScreen')
  }
}
