export default {
  path: 'contact',
  getComponent (location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/ContactScreen').default) // eslint-disable-line
    }, 'ContactScreen')
  }
}
