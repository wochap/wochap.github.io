import React from 'react'
import {Link} from 'react-router'

function SiteHeaderLink({isHome, title, props}) {
  return React.createElement(
    isHome ? 'a' : Link,
    {
      className: 'o-btn c-site-nav__link',
      ...props,
    },
    title,
  )
}

SiteHeaderLink.propTypes = {
  isHome: React.PropTypes.bool.isRequired,
  title: React.PropTypes.string.isRequired,
  props: React.PropTypes.object, // eslint-disable-line
}

export default SiteHeaderLink
