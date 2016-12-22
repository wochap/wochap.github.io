import React from 'react'
import data from 'app/config/data'
import Helmet from 'react-helmet'
import Work from './Work'

function WorksScreen () {
  return (
    <section className="o-wrapper">
      <Helmet
        title={data.screens.works.title}
        meta={[
          {
            name: 'description',
            content: data.screens.works.description
          }, {
            property: 'og:title',
            content: data.screens.works.title
          }, {
            property: 'og:description',
            content: data.screens.works.description
          }
        ]}
        link={[
          {
            rel: 'canonical',
            href: data.screens.works.canonicalHref
          }
        ]}
      />

      <h2 className="u-mb3 u-caps u-center">Mis ultimos proyectos</h2>
      <p className="u-mb5 u-fz-sm u-center u-muted">Proyectos en los que trabajé.</p>

      <ul className="o-grid o-grid--gutter-3 u-list-reset">
        <li className="o-grid__item u-12/12 u-6/12@tablet u-4/12@laptop">
          <Work />
        </li>
      </ul>
    </section>
  )
}

export default WorksScreen
