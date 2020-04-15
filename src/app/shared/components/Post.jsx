import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {formatDate} from 'utils/formatter'

function Post({post}) {
  return (
    <article>
      <h3 className='u-fz-h2 u-mt0 u-mb2 u-line-height-1'>
        <Link to={`/blog/${post.fileName}`}>{post.title}</Link>
      </h3>
      <p className='u-fz-sm u-muted u-mb0'>
        {formatDate(post.date)}
        <br />
        <small>{post.readingTime}</small>
      </p>
    </article>
  )
}

Post.propTypes = {
  post: PropTypes.shape({
    readingTime: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export default Post
