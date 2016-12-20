import React from 'react'

function ContactScreen () {
  return (
    <section className="o-wrapper">
      <h2 className="u-mb3 u-caps u-center">Contáctame</h2>
      <p className="u-mb5 u-center u-muted">Envíame un mensaje para trabajar juntos.</p>
      <p className="u-center u-mb5">
        <a className="o-btn c-btn c-btn--primary" href="mailto:gean.marroquin@gmail.com">Enviar mensaje</a>
      </p>
      <ul className="u-list-reset u-center u-fz-h00 u-m0">
        <li>
          <a className href="https://github.com/wochap" target="_blank" rel="noopener noreferrer">
            <i className="u-icon">github</i>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default ContactScreen
