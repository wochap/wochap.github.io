import React from 'react'
import PropTypes from 'prop-types'
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
  isHome: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  props: PropTypes.object, // eslint-disable-line
}

export default SiteHeaderLink
