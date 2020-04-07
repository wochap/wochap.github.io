import WorkScreen from './components/WorkScreen' // eslint-disable-line

export default {
  path: ':fileName',
  component: WorkScreen,
  exact: true,
  layoutProps: {
    headerProps: {
      isFixed: true,
    },
  },
}
