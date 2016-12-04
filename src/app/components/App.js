import React from 'react'
import SiteHeader from './SiteHeader'

function App (props) {
  const isHome = props.location.pathname === '/'

  return (
    <main className="c-app">
      <SiteHeader isHome={isHome} />
      {props.children}
    </main>
  )
}

App.propTypes = {
  children: React.PropTypes.element,
  location: React.PropTypes.object // eslint-disable-line
}

export default App
