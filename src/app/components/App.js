import React from 'react'
import AppLayout from 'components/AppLayout'

function App ({children, routes}) {
  const {layoutProps} = routes[routes.length - 1]

  return (
    <AppLayout {...layoutProps}>
      {children}
    </AppLayout>
  )
}

App.propTypes = {
  children: React.PropTypes.element,
  routes: React.PropTypes.array // eslint-disable-line
}

export default App
