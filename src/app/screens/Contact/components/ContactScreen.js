import React from 'react'
import data from 'app/config/data'
import ScreenHelmet from 'components/ScreenHelmet'
import ExternalLink from 'components/ExternalLink'

function ContactScreen () {
  return (
    <section className="o-wrapper u-center u-mb5">
      <ScreenHelmet
        title={data.screens.contact.title}
        description={data.screens.contact.description}
        canonicalHref={data.screens.contact.canonicalHref}
      />

      <h2 className="u-mb3 u-caps">Contáctame</h2>
      <p className="u-mb4 u-fz-sm u-muted">Envíame un mensaje para trabajar juntos.</p>
      <p className="u-mb5">
        <a className="o-btn c-btn c-btn--primary" href={`mailto:${data.email}`}>Enviar mensaje</a>
      </p>
      <p className="u-m0 u-fz-sm u-muted">Y encuentrame en:</p>
      <ul className="u-list-reset u-fz-h00 u-m0">
        <li className="u-inline-block u-p3">
          <ExternalLink className="u-block" href="https://github.com/wochap" title="Github">
            <i className="u-icon u-block">github</i>
          </ExternalLink>
        </li>
        <li className="u-inline-block u-p3">
          <ExternalLink className="u-block u-color-npm" href="https://www.npmjs.com/~wochap" title="NPM">
            <i className="u-icon u-block">npm</i>
          </ExternalLink>
        </li>
        <li className="u-inline-block u-p3">
          <ExternalLink className="u-block u-color-freecodecamp" href="https://www.freecodecamp.com/wochap" title="Free code camp">
            <i className="u-icon u-block">freecodecamp</i>
          </ExternalLink>
        </li>
        <li className="u-inline-block u-p3">
          <ExternalLink className="u-block" href="http://codepen.io/wochap" title="Codepen">
            <i className="u-icon u-block">codepen</i>
          </ExternalLink>
        </li>
        <li className="u-inline-block u-p3">
          <ExternalLink className="u-block u-color-twitter" href="https://twitter.com/nwochap" title="Twitter">
            <i className="u-icon u-block">twitter</i>
          </ExternalLink>
        </li>
      </ul>
    </section>
  )
}

export default ContactScreen
