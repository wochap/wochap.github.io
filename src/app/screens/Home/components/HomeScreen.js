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

      <div className="c-home-screen__hero">
        <div className="o-wrapper">
          <div className="c-home-screen__hero-wrapper">
            <h1 className="u-caps">Hola!, soy Gean</h1>
            <p className="u-fade-in-up">{data.about}</p>
            <a className="o-btn c-btn c-btn--secondary u-mr3 u-my2 u-fade-in-up u-delay-2" href={`mailto:${data.email}`}>Contáctame</a>
            <Link className="o-btn c-btn c-btn--secondary c-btn--ghost u-white u-my2 u-fade-in-up u-delay-3" to="/works">Ver portafolio</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeScreen
