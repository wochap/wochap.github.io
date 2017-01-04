import React from 'react'

function ExternalLink ({href, title, children, className}) {
  return (
    <a className={className} href={href} title={title} target="_blank" rel="noopener noreferrer">
      {children || title}
    </a>
  )
}

ExternalLink.propTypes = {
  className: React.PropTypes.string,
  href: React.PropTypes.string,
  title: React.PropTypes.string,
  children: React.PropTypes.node
}

export default ExternalLink
