import React from 'react'

function ShimmerText ({darken = false, text, children}) {
  return (
    <div className={`c-shimmer-text ${darken ? 'c-shimmer-text--darken' : null}`}>
      <div className="c-shimmer-text__text u-blokk-font">{text || children}</div>
    </div>
  )
}

ShimmerText.propTypes = {
  darken: React.PropTypes.bool,
  text: React.PropTypes.string,
  children: React.PropTypes.node
}

export default ShimmerText
