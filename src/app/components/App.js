import React from 'react'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

function App ({location, children}) {
  const isHome = location ? location.pathname === '/' : false

  return (
    <main className="c-app">
      <div className="c-app__wrapper">
        <SiteHeader isHome={isHome} />
        {children}
        {isHome ? null : <SiteFooter />}
      </div>
    </main>
  )
}

App.propTypes = {
  children: React.PropTypes.element,
  location: React.PropTypes.object // eslint-disable-line
}

export default App
