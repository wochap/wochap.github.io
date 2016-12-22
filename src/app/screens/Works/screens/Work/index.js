export default {
  path: ':slug',
  getComponent (location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/WorkScreen').default) // eslint-disable-line
    }, 'WorkScreen')
  }
}
