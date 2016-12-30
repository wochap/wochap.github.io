import React from 'react'
import {Link} from 'react-router'
import {formatDate} from 'utils/formatter'

function Post ({post}) {
  return (
    <article className="c-post">
      <Link className="c-post__image-link" to={`/blog/${post.slug}`}>
        <img src={post.imageUrl} alt={post.title} />
        {/* // TODO: crop images on build step */}
        {/* <img className="u-m0" src={post.imageUrl} sizes="100vw" srcSet="http://placehold.it/500x400 500w, http://placehold.it/800x250 800w" alt="da" /> */}
      </Link>
      <h3 className="c-post__title">
        <Link className to={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className="c-post__date">{formatDate(post.date)}</p>
      <p className="c-post__description">{post.description}</p>
      <Link className="o-btn c-btn c-btn--primary" to={`/blog/${post.slug}`}>Leer más</Link>
    </article>
  )
}

Post.propTypes = {
  post: React.PropTypes.shape({
    slug: React.PropTypes.string.isRequired,
    date: React.PropTypes.string.isRequired,
    imageUrl: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired
  })
}

export default Post
