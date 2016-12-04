import React from 'react'

function SiteHeader ({isHome}) {
  return (
    <header className={`o-wrapper c-site-header ${isHome ? 'c-site-header--home' : ''}`}>
      <h1 className="c-site-header__title" ><span>Gean</span> <span>Marroquin</span></h1>
      <nav className="c-site-nav">
        <ul>
          <li>
            <a className="o-btn" href="#!">About</a>
          </li>
          <li>
            <a className="o-btn" href="#!">Works</a>
          </li>
          <li>
            <a className="o-btn" href="#!">Blog</a>
          </li>
          <li>
            <a className="o-btn" href="emailto:gean.marroquin@gmail.com">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        className="c-site-header__btn-toggle c-hamburger u-hide@laptop js-hamburger"
        aria-label="Mostrar/Esconder navegación"
        type="button"
      >
        <em />
        <em />
        <em />
      </button>
    </header>
  )
}

SiteHeader.propTypes = {
  isHome: React.PropTypes.bool
}

export default SiteHeader
