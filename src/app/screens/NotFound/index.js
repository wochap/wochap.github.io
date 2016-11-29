export default {
  path: '*',
  getComponent (location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/NotFoundScreen').default) // eslint-disable-line
    }, 'NotFoundScreen')
  }
}
