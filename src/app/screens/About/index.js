export default {
  path: 'about',
  getComponent (location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/AboutScreen').default) // eslint-disable-line
    }, 'AboutScreen')
  }
}
