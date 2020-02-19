import React from 'react'
import data from 'app/config/data'
import ScreenHelmet from 'components/ScreenHelmet'
import SiteContact from 'components/SiteContact'
import Works from 'components/Works'
// import Posts from 'components/Posts'

function HomeScreen () {
  return (
    <main className="c-home-screen">
      <ScreenHelmet
        title={data.screens.home.title}
        description={data.screens.home.description}
        canonicalHref={data.screens.home.canonicalHref}
      />

      <div className="c-home-screen__hero">
        <div className="o-wrapper u-relative">
          <div className="c-home-screen__hero-wrapper">
            <h1 className="u-caps">Hola!, soy Gean</h1>
            <p>{data.about}</p>
            <a className="o-btn c-btn c-btn--secondary u-mr3 u-my2" href="#contact">Contáctame</a>
            <a className="o-btn c-btn c-btn--secondary c-btn--ghost u-white u-my2" href="#works">Ver portafolio</a>
          </div>
        </div>
      </div>
      <Works className="u-py5" id="works" />
      {/* <Posts className="o-wrapper u-py5 u-center" id="blog" /> */}
      <SiteContact className="u-py5" id="contact" />
    </main>
  )
}

export default HomeScreen
