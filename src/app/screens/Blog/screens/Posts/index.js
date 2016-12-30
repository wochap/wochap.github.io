export default {
  getComponent (location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./containers/PostsScreen').default) // eslint-disable-line
    }, 'PostsScreen')
  }
}
