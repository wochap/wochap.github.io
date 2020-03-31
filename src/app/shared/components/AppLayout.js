import React from 'react'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

function AppLayout({hasHeader = true, headerProps = {}, hasFooter = true, children}) {
  return (
    <div className='c-app-layout'>
      <div className='c-app-layout__wrapper'>
        {hasHeader ? <SiteHeader {...headerProps} /> : null}
        {children}
        {hasFooter ? <SiteFooter /> : null}
      </div>
    </div>
  )
}

AppLayout.propTypes = {
  children: React.PropTypes.node,
  hasHeader: React.PropTypes.bool,
  hasFooter: React.PropTypes.bool,
  headerProps: React.PropTypes.object, // eslint-disable-line
}

export default AppLayout
