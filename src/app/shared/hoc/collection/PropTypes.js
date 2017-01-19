import React from 'react'

export const itemShape = React.PropTypes.shape({
  frontMatter: React.PropTypes.shape({
    fileName: React.PropTypes.string.isRequired
  }),
  bodyHtml: React.PropTypes.string
})

export const collectionShape = React.PropTypes.arrayOf(
  React.PropTypes.shape({
    frontMatter: React.PropTypes.shape({
      fileName: React.PropTypes.string.isRequired
    }).isRequired
  }).isRequired
).isRequired

export const stateShape = React.PropTypes.shape({
  isPending: React.PropTypes.bool.isRequired,
  isFulfilled: React.PropTypes.bool.isRequired,
  error: React.PropTypes.bool.isRequired
}).isRequired
