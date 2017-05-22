const topBar = (
  typeof window === 'undefined'
  // typeof window === 'undefined'
  ? {
    show: () => {},
    hide: () => {},
    config: () => {}
  }
  : require('topbar') // eslint-disable-line
)

export default topBar
