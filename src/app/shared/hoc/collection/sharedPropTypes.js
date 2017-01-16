import React from 'react'

export const itemState = React.PropTypes.shape({
  isPending: React.PropTypes.bool.isRequired,
  isFulfilled: React.PropTypes.bool.isRequired,
  error: React.PropTypes.bool.isRequired
}).isRequired

export const item = React.PropTypes.shape({
  frontMatter: React.PropTypes.shape({
    fileName: React.PropTypes.string.isRequired
  }),
  bodyHtml: React.PropTypes.string
})

export const collectionState = React.PropTypes.shape({
  isPending: React.PropTypes.bool.isRequired,
  isFulfilled: React.PropTypes.bool.isRequired,
  error: React.PropTypes.bool.isRequired
}).isRequired

export const collection = React.PropTypes.arrayOf(
  React.PropTypes.shape({
    frontMatter: React.PropTypes.shape({
      fileName: React.PropTypes.string.isRequired
    }).isRequired
  }).isRequired
).isRequired
