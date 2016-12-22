export default {
  getComponent (location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/PostsScreen').default) // eslint-disable-line
    }, 'PostsScreen')
  }
}
