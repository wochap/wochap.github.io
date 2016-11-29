import React from 'react'
import {shallow} from 'enzyme'
import SiteHeader from '../SiteHeader'

describe('SiteHeader', () => {
  it('render title', () => {
    const siteHeader = shallow(<SiteHeader />)

    expect(siteHeader.find('h1').text()).toEqual('Gean Carlos Bonifacio Marroquin')
  })
})
