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
              <Link className="o-btn" to="/about">About</Link>
            </li>
            <li>
              <Link className="o-btn" to="/works">Works</Link>
            </li>
            <li>
              <Link className="o-btn" to="/blog">Blog</Link>
            </li>
            <li>
              <a className="o-btn" href="emailto:gean.marroquin@gmail.com">Contact</a>
            </li>
          </ul>
        </nav>
        <Hamburger
          className="c-site-header__btn-toggle u-hide@laptop"
          onClick={this.toggleNav}
          isOpen={isNavOpen}
        />
      </header>
    )
  }
}

export default SiteHeader
