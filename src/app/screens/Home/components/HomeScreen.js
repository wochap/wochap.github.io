import React from 'react'
import data from 'app/config/data'
import {Link} from 'react-router'
import ScreenHelmet from 'components/ScreenHelmet'

function HomeScreen () {
  return (
    <section className="c-home-screen">
      <ScreenHelmet
        title={data.screens.home.title}
        description={data.screens.home.description}
        canonicalHref={data.screens.home.canonicalHref}
      />

      <div className="o-wrapper">
        <div className="c-home-screen__wrapper">
          <h1 className="u-caps">Hola!, soy Gean</h1>
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
