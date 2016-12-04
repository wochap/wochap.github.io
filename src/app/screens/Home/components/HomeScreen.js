import React from 'react'
import Helmet from 'react-helmet'

function HomeScreen () {
  return (
    <section className="c-home-screen">
      <Helmet
        title="Gean Carlos Bonifacio Marroquin"
        meta={[
          {
            name: 'description',
            content: 'Desarrollador Front-end'
          }, {
            property: 'og:title',
            content: 'Gean Carlos Bonifacio Marroquin'
          }, {
            property: 'og:description',
            content: 'Desarrollador Front-end'
          }
        ]}
        link={[
          {
            rel: 'canonical',
            href: 'https://geanmarroquin.com'
          }
        ]}
      />
      <div className="o-wrapper">
        <div className="c-home-screen__wrapper">
          <h2 className="u-caps">Hi, i am Gean Marroquin</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem.</p>
          <a
            className="o-btn c-btn c-btn--secondary u-mr3 u-my2"
            href="emailto:gean.marroquin@gmail.com"
          >Contact me</a>
          <a
            className="o-btn c-btn c-btn--secondary c-btn--ghost u-white u-my2"
            href="#!"
          >View works</a>
        </div>
      </div>
    </section>
  )
}

export default HomeScreen
