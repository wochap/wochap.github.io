import React from 'react'
import {shallow} from 'enzyme'
import SiteHeader from '../SiteHeader'

describe('SiteHeader', () => {
  it('add home modifier', () => {
    const siteHeader = shallow(<SiteHeader />)

    expect(siteHeader.hasClass('c-site-header--home')).toEqual(false)

    siteHeader.setProps({
      isHome: true
    })

    expect(siteHeader.hasClass('c-site-header--home')).toEqual(true)
  })

  it('toggle nav on hamburger click', () => {
    const siteHeader = shallow(<SiteHeader />)
    const hamburger = siteHeader.find('Hamburger')

    expect(hamburger).toHaveLength(1)
    expect(siteHeader.find('.c-site-nav').hasClass('is-open')).toEqual(false)

    hamburger.simulate('click')

    expect(siteHeader.find('.c-site-nav').hasClass('is-open')).toEqual(true)
    expect(siteHeader.state().isNavOpen).toEqual(true)
  })

  it('toggle nav on Link click', () => {
    const siteHeader = shallow(<SiteHeader />)
    const hamburger = siteHeader.find('Hamburger')
    const link = siteHeader.find('.c-site-nav Link').first()

    expect(hamburger).toHaveLength(1)
    expect(siteHeader.find('.c-site-nav').hasClass('is-open')).toEqual(false)

    hamburger.simulate('click')

    expect(siteHeader.find('.c-site-nav').hasClass('is-open')).toEqual(true)
    expect(siteHeader.state().isNavOpen).toEqual(true)

    link.simulate('click')

    expect(siteHeader.find('.c-site-nav').hasClass('is-open')).toEqual(false)
  })
})
