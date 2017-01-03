import React from 'react'

function ShimmerText ({darken = false, text, children}) {
  return (
    <span className={`c-shimmer-text ${darken ? 'c-shimmer-text--darken' : null}`}>
      <span className="c-shimmer-text__text">{text || children}</span>
    </span>
  )
}

ShimmerText.propTypes = {
  darken: React.PropTypes.bool,
  text: React.PropTypes.string,
  children: React.PropTypes.node
}

export default ShimmerText
