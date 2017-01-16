import React from 'react'
import ShimmerText from 'components/ShimmerText'

function MarkdownBody ({html, isLoading = false}) {
  if (isLoading) {
    return (
      <div className="o-wrapper o-wrapper--3">
        <ShimmerText>
          <span className="u-block u-pb3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
          <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
        </ShimmerText>
      </div>
    )
  }

  return (
    <div
      className="o-wrapper o-wrapper--3 c-markdown-body"
      dangerouslySetInnerHTML={{
        __html: html
      }}
    />
  )
}

MarkdownBody.propTypes = {
  html: React.PropTypes.string,
  isLoading: React.PropTypes.bool
}

export default MarkdownBody
