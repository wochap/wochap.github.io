import React from 'react'
import PropTypes from 'prop-types'
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
  children: PropTypes.node,
  hasHeader: PropTypes.bool,
  hasFooter: PropTypes.bool,
  headerProps: PropTypes.object, // eslint-disable-line
}

export default AppLayout
