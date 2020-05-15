import React from 'react'
import PropTypes from 'prop-types'
import {Link, NavLink} from 'react-router-dom'
import SiteHeaderLink from 'components/SiteHeaderLink'
import t from 'app/shared/utils/t'
import Hamburger from './Hamburger'
import ThemeToggler from './ThemeToggler'
import LangToggler from './LangToggler'

class SiteHeader extends React.Component {
  static propTypes = {
    isFixed: PropTypes.bool,
    isHome: PropTypes.bool,
  }

  static defaultProps = {
    isHome: false,
  }

  state = {
    isNavOpen: false,
  }

  shouldComponentUpdate({isFixed, isHome}, {isNavOpen}) {
    if (this.props.isFixed !== isFixed || this.state.isNavOpen !== isNavOpen || this.props.isHome !== isHome) {
      return true
    }
    return false
  }

  _toggleNav = () => {
    const {isNavOpen} = this.state

    this.setState({
      isNavOpen: !isNavOpen,
    })
  }

  _closeNav = () => {
    this.setState({
      isNavOpen: false,
    })
  }

  render() {
    const {isFixed, isHome} = this.props
    const {isNavOpen} = this.state

    return (
      <header className={`o-wrapper c-site-header ${isFixed ? 'is-fixed' : ''}`}>
        <p className='c-site-header__title'>
          <Link className='' to='/'>
            Gean <br /> Marroquin
          </Link>
        </p>
        <div className='u-flex u-items-center'>
          <nav className={`o-dialog c-site-nav ${isNavOpen ? 'is-open' : ''}`}>
            <ul className='o-dialog__wrapper'>
              <li>
                <NavLink className='o-btn c-site-nav__link' to='/about' onClick={this._closeNav} activeClassName='is-active'>
                  {t('About', 'Sobre mi')}
                </NavLink>
              </li>
              <li>
                <SiteHeaderLink
                  title='Blog'
                  isHome={isHome}
                  props={
                    isHome
                      ? {
                          href: '#blog',
                          onClick: this._closeNav,
                        }
                      : {
                          to: '/blog',
                          onClick: this._closeNav,
                          activeClassName: 'is-active',
                        }
                  }
                />
              </li>
              <li>
                <SiteHeaderLink
                  title='Portafolio'
                  isHome={isHome}
                  props={
                    isHome
                      ? {
                          href: '#works',
                          onClick: this._closeNav,
                        }
                      : {
                          to: '/works',
                          onClick: this._closeNav,
                          activeClassName: 'is-active',
                        }
                  }
                />
              </li>
              <li>
                <SiteHeaderLink
                  title={t('Contact', 'Contáctame')}
                  isHome={isHome}
                  props={
                    isHome
                      ? {
                          href: '#contact',
                          onClick: this._closeNav,
                        }
                      : {
                          to: '/contact',
                          onClick: this._closeNav,
                          activeClassName: 'is-active',
                        }
                  }
                />
              </li>
            </ul>
          </nav>

          <LangToggler className='u-ml4' />
          <ThemeToggler className='u-ml1' />
          <Hamburger
            className={`c-site-header__btn-toggle ${isNavOpen ? 'is-active' : ''} u-hide@laptop`}
            onClick={this._toggleNav}
            isOpen={isNavOpen}
          />
        </div>
      </header>
    )
  }
}

export default SiteHeader
