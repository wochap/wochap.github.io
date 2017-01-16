import React from 'react'
import {Link} from 'react-router'

function Work ({work}) { // eslint-disable-line
  return (
    <article
      className="c-work"
      style={{
        backgroundImage: `url(${work.imageUrl})`
        // backgroundImage: 'url(http://placehold.it/350x410)'
      }}
    >
      <Link className="c-work__link" to={`/works/${work.fileName}`}>
        <h3 className="u-caps">{work.title}</h3>
        <p>Ver proyecto completo</p>
      </Link>
    </article>
  )
}

// TODO: add propTypes

export default Work
