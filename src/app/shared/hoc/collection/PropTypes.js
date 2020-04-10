import PropTypes from 'prop-types'

export const itemShape = PropTypes.shape({
  frontMatter: PropTypes.shape({
    fileName: PropTypes.string.isRequired,
  }),
  bodyHtml: PropTypes.string,
})

export const collectionShape = PropTypes.arrayOf(
  PropTypes.shape({
    frontMatter: PropTypes.shape({
      fileName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
).isRequired

export const stateShape = PropTypes.shape({
  isPending: PropTypes.bool.isRequired,
  isFulfilled: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.bool.isRequired, PropTypes.instanceOf(Error)]),
}).isRequired
