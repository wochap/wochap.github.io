import React from 'react'

function ExternalLink ({href, title}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">{title}</a>
  )
}

ExternalLink.propTypes = {
  href: React.PropTypes.string,
  title: React.PropTypes.string
}

export default ExternalLink
