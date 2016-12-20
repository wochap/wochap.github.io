import React from 'react'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

function App ({location, children}) {
  const isHome = location ? location.pathname === '/' : false
  let isFixed = false

  if (location) {
    if (location.pathname === '/' ||
        location.pathname.toLowerCase().includes('/works/') ||
        location.pathname.toLowerCase().includes('/blog/')) {
      isFixed = true
    }
  }

  return (
    <main className="c-app">
      <div className="c-app__wrapper">
        <SiteHeader isFixed={isFixed} />
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
