import React from 'react'
import data from 'app/config/data'
import Helmet from 'react-helmet'

function ContactScreen () {
  return (
    <section className="o-wrapper u-center">
      <Helmet
        title={data.screens.contact.title}
        meta={[
          {
            name: 'description',
            content: data.screens.contact.description
          }, {
            property: 'og:title',
            content: data.screens.contact.title
          }, {
            property: 'og:description',
            content: data.screens.contact.description
          }
        ]}
        link={[
          {
            rel: 'canonical',
            href: data.screens.contact.canonicalHref
          }
        ]}
      />

      <h2 className="u-mb3 u-caps">Contáctame</h2>
      <p className="u-mb4 u-fz-sm u-muted">Envíame un mensaje para trabajar juntos.</p>
      <p className="u-mb5">
        <a className="o-btn c-btn c-btn--primary" href={`mailto:${data.email}`}>Enviar mensaje</a>
      </p>
      <p className="u-m0 u-fz-sm u-muted">Y encuentrame en:</p>
      <ul className="u-list-reset u-fz-h00 u-m0">
        <li className="u-inline-block u-p3">
          <a className href="https://github.com/wochap" target="_blank" rel="noopener noreferrer">
            <i className="u-icon">github</i>
          </a>
        </li>
        <li className="u-inline-block u-p3">
          <a className href="http://codepen.io/wochap" target="_blank" rel="noopener noreferrer">
            <i className="u-icon">codepen</i>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default ContactScreen
