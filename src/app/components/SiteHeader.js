import React from 'react'
import {Link} from 'react-router'
import Hamburger from './Hamburger'

class SiteHeader extends React.Component {
  static propTypes = {
    isHome: React.PropTypes.bool
  }

  state = {
    isNavOpen: false
  }

  toggleNav = () => {
    const {isNavOpen} = this.state

    this.setState({
      isNavOpen: !isNavOpen
    })
  }

  render () {
    const {isHome} = this.props
    const {isNavOpen} = this.state

    return (
      <header className={`o-wrapper c-site-header ${isHome ? 'c-site-header--home' : ''}`}>
        <h1 className="c-site-header__title" >
          <Link className="" to="/">
            <span>Gean</span> <span>Marroquin</span>
          </Link>
        </h1>
        <nav className={`c-site-nav ${isNavOpen ? 'is-open' : ''}`}>
          <ul>
            <li>
              <Link
                className="o-btn c-site-nav__link"
                to="/about"
                onClick={this.toggleNav}
              >About</Link>
            </li>
            <li>
              <Link
                className="o-btn c-site-nav__link"
                to="/works"
                onClick={this.toggleNav}
              >Works</Link>
            </li>
            <li>
              <Link
                className="o-btn c-site-nav__link"
                to="/blog"
                onClick={this.toggleNav}
              >Blog</Link>
            </li>
            <li>
              <a
                className="o-btn c-site-nav__link"
                href="emailto:gean.marroquin@gmail.com"
                onClick={this.toggleNav}
              >Contact</a>
            </li>
          </ul>
        </nav>
        <Hamburger
          className={`c-site-header__btn-toggle ${isNavOpen ? 'is-active' : ''} u-hide@laptop`}
          onClick={this.toggleNav}
          isOpen={isNavOpen}
        />
      </header>
    )
  }
}

export default SiteHeader
