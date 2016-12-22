export default {
  path: '',
  getComponent (location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/WorksScreen').default) // eslint-disable-line
    }, 'WorksScreen')
  }
}
