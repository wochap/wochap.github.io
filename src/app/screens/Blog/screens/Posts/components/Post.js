import React from 'react'
import {Link} from 'react-router'

function Post () {
  return (
    <article className="c-post">
      <Link className="c-post__image-link" to="/blog/dam">
        <img className="u-m0" src="http://placehold.it/800x250" sizes="100vw" srcSet="http://placehold.it/500x400 500w, http://placehold.it/800x250 800w" alt="da" />
      </Link>
      <h3 className="c-post__title">
        <Link className to="/blog/dam">Designing For print</Link>
      </h3>
      <p className="c-post__date">November 5, 2016</p>
      <p className="c-post__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit id est laborum.</p>
      <Link className="o-btn c-btn c-btn--primary" to="/blog/dam">Read more</Link>
    </article>
  )
}

export default Post
