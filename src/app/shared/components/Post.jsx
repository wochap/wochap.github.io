import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {formatDate} from 'utils/formatter'

function Post({post}) {
  return (
    <article>
      <p className='u-fz-sm u-mb1 u-muted'>
        {formatDate(post.date)}
        <br />
        <small>{post.readingTime}</small>
      </p>
      <h3 className='u-fz-h2 u-mb0 u-line-height-1'>
        <Link to={`/blog/${post.fileName}`}>{post.title}</Link>
      </h3>
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
