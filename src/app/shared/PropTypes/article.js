import PropTypes from 'prop-types'

export const frontMatterShape = PropTypes.shape({
  date: PropTypes.string.isRequired,
  formattedDate: PropTypes.string,
  imageUrl: PropTypes.string,
  heroImageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  tasks: PropTypes.string,
  role: PropTypes.string,
  siteLink: PropTypes.string,
  fileName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
})

export const articleShape = PropTypes.shape({
  frontMatter: frontMatterShape,
  bodyHtml: PropTypes.string,
})
