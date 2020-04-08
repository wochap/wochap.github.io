import {frontMatterShape} from 'PropTypes/article'
import React from 'react'
import {Link} from 'react-router-dom'

function Work({work}) {
  return (
    <article
      className='c-work'
      style={{
        backgroundImage: `url(${work.imageUrl})`,
      }}
    >
      <Link className='c-work__link' to={`/works/${work.fileName}`}>
        <h3 className='u-caps'>{work.title}</h3>
        <p>Ver proyecto completo</p>
      </Link>
    </article>
  )
}

Work.propTypes = {
  work: frontMatterShape.isRequired,
}

export default Work
