import React from 'react'
import {shallow} from 'enzyme'
import SiteHeaderLink from '../SiteHeaderLink'

describe('SiteHeaderLink', () => {
  it('render component', () => {
    const wrapper = shallow(<SiteHeaderLink props={{to: '/'}} isHome={false} title='Titulo' />)

    expect(wrapper.length).toBeTruthy()
  })
})
