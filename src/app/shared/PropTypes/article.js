import React from 'react'

export const frontMatterShape = React.PropTypes.shape({
  date: React.PropTypes.string.isRequired,
  formattedDate: React.PropTypes.string,
  imageUrl: React.PropTypes.string,
  heroImageUrl: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  tasks: React.PropTypes.string,
  role: React.PropTypes.string,
  siteLink: React.PropTypes.string,
  fileName: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  tags: React.PropTypes.arrayOf(React.PropTypes.string),
})

export const articleShape = React.PropTypes.shape({
  frontMatter: frontMatterShape,
  bodyHtml: React.PropTypes.string,
})
