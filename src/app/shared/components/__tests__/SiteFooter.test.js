import React from 'react'
import {shallow} from 'enzyme'
import SiteFooter from '../SiteFooter'

describe('SiteFooter', () => {
  it('render component', () => {
    const wrapper = shallow(<SiteFooter />)

    expect(typeof wrapper).toEqual('object')
  })
})
