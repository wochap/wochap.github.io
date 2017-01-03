export default {
  path: 'about',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/AboutScreen').default) // eslint-disable-line
    }, 'AboutScreen')
  }
}
