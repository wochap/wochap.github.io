import {frontMatterShape} from 'PropTypes/article'
import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

function Work({work, titleTag: TitleTag = 'h3'}) {
  return (
    <article
      className='c-work'
      style={{
        backgroundImage: `url(${work.imageUrl})`,
      }}
    >
      <Link className='c-work__link' to={`/works/${work.fileName}`}>
        <TitleTag className='c-work__title'>{work.title}</TitleTag>
      </Link>
    </article>
  )
}

Work.propTypes = {
  work: frontMatterShape.isRequired,
  titleTag: PropTypes.string,
}

export default Work
