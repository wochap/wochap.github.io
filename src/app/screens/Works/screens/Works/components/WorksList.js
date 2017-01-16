import React from 'react'
import Work from './Work'

function WorksList ({works}) { // eslint-disable-line
  if (works.length === 0) {
    return <p>No hay trabajos que mostrar.</p>
  }

  return (
    <ul className="o-grid o-grid--gutter-3 u-list-reset">
      {works.map(work => (
        <li className="o-grid__item u-12/12 u-6/12@tablet u-4/12@laptop" key={work.frontMatter.fileName}>
          <Work work={work.frontMatter} />
        </li>
      ))}
    </ul>
  )
}

// TODO: complete propTypes
// WorkList.propTypes = {
//   works: React.PropTypes.arrayOf(
//     React.PropTypes.
//   )
// }

export default WorksList
