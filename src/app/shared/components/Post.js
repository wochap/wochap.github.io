import React from 'react'
import {Link} from 'react-router'
import {formatDate} from 'utils/formatter'

function Post ({post}) {
  return (
    <article>
      <p className="u-fz-sm u-mb1 u-muted">{formatDate(post.date)}</p>
      <h3 className="u-fz-h2 u-mb0 u-line-height-1">
        <Link to={`/blog/${post.fileName}`}>{post.title}</Link>
      </h3>
    </article>
  )
}

Post.propTypes = {
  post: React.PropTypes.shape({
    fileName: React.PropTypes.string.isRequired,
    date: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
  }).isRequired
}

export default Post
