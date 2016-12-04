import React from 'react'
import {shallow} from 'enzyme'
import SiteHeader from '../SiteHeader'

describe('SiteHeader', () => {
  it('render title', () => {
    const siteHeader = shallow(<SiteHeader />)

    expect(siteHeader.find('h1').text()).toEqual('Gean Marroquin')
  })

  it('add home modifier', () => {
    const siteHeader = shallow(<SiteHeader isHome />)

    expect(siteHeader.hasClass('c-site-header--home')).toEqual(true)
  })
})
