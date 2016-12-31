export default {
  path: ':slug',
  getComponent (location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./containers/PostScreen').default) // eslint-disable-line
    }, 'PostScreen')
  }
}
