import React from 'react'
import {shallow} from 'enzyme'
import SiteHeaderLink from '../SiteHeaderLink'

describe('SiteHeaderLink', () => {
  it('render component', () => {
    const wrapper = shallow(<SiteHeaderLink />)

    expect(wrapper.length).toBeTruthy()
  })
})
