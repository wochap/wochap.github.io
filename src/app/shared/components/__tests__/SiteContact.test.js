import React from 'react'
import {shallow} from 'enzyme'
import SiteContact from '../SiteContact'

describe('SiteContact', () => {
  it('render component', () => {
    const wrapper = shallow(<SiteContact />)

    expect(wrapper.length).toBeTruthy()
  })
})
