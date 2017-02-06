import WorkScreen from './components/WorkScreen' // eslint-disable-line

export default {
  path: ':fileName',
  component: WorkScreen,
  layoutProps: {
    headerProps: {
      isFixed: true
    }
  }
}
