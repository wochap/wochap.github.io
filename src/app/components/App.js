import React from 'react'
import AppLayout from 'components/AppLayout'

function App ({children, routes}) { // eslint-disable-line
  const {layoutProps} = routes[routes.length - 1]

  return (
    <AppLayout {...layoutProps}>
      {children}
    </AppLayout>
  )
}

App.propTypes = {
  children: React.PropTypes.element
}

export default App
