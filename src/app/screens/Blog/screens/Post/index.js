export default {
  path: ':slug',
  getComponent (location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/PostScreen').default) // eslint-disable-line
    }, 'PostScreen')
  }
}
