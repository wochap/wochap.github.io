import React from 'react'
import {Link} from 'react-router'
import Hamburger from './Hamburger'

class SiteHeader extends React.Component {
  static propTypes = {
    isFixed: React.PropTypes.bool
  }

  state = {
    isNavOpen: false
  }

  _toggleNav = () => {
    const {isNavOpen} = this.state

    this.setState({
      isNavOpen: !isNavOpen
    })
  }

  _closeNav = () => {
    this.setState({
      isNavOpen: false
    })
  }

  render () {
    const {isFixed} = this.props
    const {isNavOpen} = this.state

    return (
      <header className={`o-wrapper c-site-header ${isFixed ? 'is-fixed' : ''}`}>
        <p className="c-site-header__title">
          <Link className to="/">
            Gean <br /> Marroquin
          </Link>
        </p>
        <nav className={`o-dialog c-site-nav ${isNavOpen ? 'is-open' : ''}`}>
          <ul className="o-dialog__wrapper">
            <li>
              <Link
                className="o-btn c-site-nav__link"
                to="/about"
                onClick={this._closeNav}
                activeClassName="is-active"
              >Sobre mi</Link>
            </li>
            <li>
              <Link
                className="o-btn c-site-nav__link"
                to="/works"
                onClick={this._closeNav}
                activeClassName="is-active"
              >Portafolio</Link>
            </li>
            <li>
              <Link
                className="o-btn c-site-nav__link"
                to="/blog"
                onClick={this._closeNav}
                activeClassName="is-active"
              >Blog</Link>
            </li>
            <li>
              <Link
                className="o-btn c-site-nav__link"
                to="/contact"
                onClick={this._closeNav}
                activeClassName="is-active"
              >Contacto</Link>
            </li>
          </ul>
        </nav>
        <Hamburger
          className={`c-site-header__btn-toggle ${isNavOpen ? 'is-active' : ''} u-hide@laptop`}
          onClick={this._toggleNav}
          isOpen={isNavOpen}
        />
      </header>
    )
  }
}

export default SiteHeader
