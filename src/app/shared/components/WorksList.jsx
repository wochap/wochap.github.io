import React from 'react'
import PropTypes from 'prop-types'
import Work from './Work'

function WorksList({works, workTitleTag}) {
  const filteredWorks = works.filter(item => !item.state?.error)
  const worksCount = filteredWorks.length

  if (worksCount === 0) {
    return <p>No hay trabajos que mostrar.</p>
  }

  return (
    <ul className='o-grid o-grid--gutter-3 u-list-reset'>
      {filteredWorks.map(work => (
        <li className='o-grid__item u-12/12 u-6/12@tablet u-4/12@laptop' key={work.frontMatter.fileName}>
          <Work work={work.frontMatter} titleTag={workTitleTag} />
        </li>
      ))}
    </ul>
  )
}

WorksList.propTypes = {
  works: PropTypes.arrayOf(
    PropTypes.shape({
      frontMatter: Work.propTypes.work,
    }),
  ).isRequired,
  workTitleTag: PropTypes.string,
}

export default WorksList
