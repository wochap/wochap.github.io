import React from 'react'

function MarkdownBody ({html}) {
  return (
    <div
      className="c-markdown-body"
      dangerouslySetInnerHTML={{
        __html: html
      }}
    />
  )
}

MarkdownBody.propTypes = {
  html: React.PropTypes.string
}

export default MarkdownBody
