import React from 'react'
import {Link} from 'react-router'

function Work () {
  return (
    <article
      className="c-work"
      style={{
        backgroundImage: 'url(http://placehold.it/350x410)'
      }}
    >
      <Link className="c-work__link" to="/works/dam">
        <h3 className="u-caps">Kiuker and root</h3>
        <p>View full Project</p>
      </Link>
    </article>
  )
}

export default Work
