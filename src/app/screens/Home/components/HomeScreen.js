import React from 'react'
import data from 'app/config/data'
import {Link} from 'react-router'
import Helmet from 'react-helmet'

function HomeScreen () {
  return (
    <section className="c-home-screen">
      <Helmet
        title={data.screens.home.title}
        meta={[
          {
            name: 'description',
            content: data.screens.home.description
          }, {
            property: 'og:title',
            content: data.screens.home.title
          }, {
            property: 'og:description',
            content: data.screens.home.description
          }
        ]}
        link={[
          {
            rel: 'canonical',
            href: data.screens.home.canonicalHref
          }
        ]}
      />

      <div className="o-wrapper">
        <div className="c-home-screen__wrapper">
          <h2 className="u-caps">Hola!, soy Gean</h2>
          <p>{data.about}</p>
          <a
            className="o-btn c-btn c-btn--secondary u-mr3 u-my2"
            href={`mailto:${data.email}`}
          >Contáctame</a>
          <Link
            className="o-btn c-btn c-btn--secondary c-btn--ghost u-white u-my2"
            to="/works"
          >Ver portafolio</Link>
        </div>
      </div>
    </section>
  )
}

export default HomeScreen
