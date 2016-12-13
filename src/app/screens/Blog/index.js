export default {
  path: 'blog',
  getComponent (location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/BlogScreen').default) // eslint-disable-line
    }, 'BlogScreen')
  }
}
