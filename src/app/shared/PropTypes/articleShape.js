import React from 'react'

export default React.PropTypes.shape({
  frontMatter: React.PropTypes.shape({
    date: React.PropTypes.string,
    formattedDate: React.PropTypes.string,
    imageUrl: React.PropTypes.string,
    heroImageUrl: React.PropTypes.string,
    title: React.PropTypes.string.isRequired,
    tasks: React.PropTypes.string,
    role: React.PropTypes.string,
    siteLink: React.PropTypes.string,
    fileName: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    tags: React.PropTypes.arrayOf(React.PropTypes.string)
  }),
  bodyHtml: React.PropTypes.string
})
