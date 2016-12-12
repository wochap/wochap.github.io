import React from 'react'
import {shallow} from 'enzyme'
import SiteHeader from '../SiteHeader'

describe('SiteHeader', () => {
  it('add home modifier', () => {
    const siteHeader = shallow(<SiteHeader isHome />)

    expect(siteHeader.hasClass('c-site-header--home')).toEqual(true)
  })

  it('toggle nav on hamburger click', () => {
    const siteHeader = shallow(<SiteHeader />)
    const nav = siteHeader.find('.c-site-nav')
    const hamburger = siteHeader.find('Hamburger')

    hamburger.simulate('click')

    expect(hamburger).toHaveLength(1)
    expect(nav.hasClass('is-open')).toEqual(true)
    expect(siteHeader.state().isNavOpen).toEqual(true)
  })
})
