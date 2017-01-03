export default {
  path: 'contact',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/ContactScreen').default) // eslint-disable-line
    }, 'ContactScreen')
  }
}
