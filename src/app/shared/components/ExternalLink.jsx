import React from 'react'
import PropTypes from 'prop-types'

function ExternalLink({href, title, children, className}) {
  return (
    <a className={className} href={href} title={title} target='_blank' rel='noopener noreferrer'>
      {children || title}
    </a>
  )
}

ExternalLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
}

export default ExternalLink
