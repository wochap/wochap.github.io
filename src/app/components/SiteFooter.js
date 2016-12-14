import React from 'react'

function SiteFooter ({isHome}) {
  if (isHome) {
    return null
  }

  return (
    <footer className="o-wrapper u-mt5 u-py3">
      <p className="u-center u-m0 u-muted u-fz-xs">Design by <a href="#!"><strong>Ali avak</strong></a> and Developed by <a href="#!"><strong>Ali avak</strong></a></p>
    </footer>
  )
}

SiteFooter.propTypes = {
  isHome: React.PropTypes.bool
}

export default SiteFooter
