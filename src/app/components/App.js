import React from 'react'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

function App ({location, children}) {
  const isHome = location ? location.pathname === '/' : false
  const isNotFound = location ? location.pathname === '/404' || location.pathname === '/404.html' : false
  let isFixed = false

  if (location) {
    if (location.pathname === '/' ||
        location.pathname === '/404' ||
        location.pathname === '/404.html' ||
        location.pathname.toLowerCase().includes('/works/') ||
        location.pathname.toLowerCase().includes('/blog/')) {
      isFixed = true
    }

    if (location.pathname.toLowerCase() === '/works/' ||
        location.pathname.toLowerCase() === '/blog/') {
      isFixed = false
    }
  }

  return (
    <main className="c-app">
      <div className="c-app__wrapper">
        <SiteHeader isFixed={isFixed} />
        {children}
        {isHome || isNotFound ? null : <SiteFooter />}
      </div>
    </main>
  )
}

App.propTypes = {
  children: React.PropTypes.element,
  location: React.PropTypes.object // eslint-disable-line
}

export default App
