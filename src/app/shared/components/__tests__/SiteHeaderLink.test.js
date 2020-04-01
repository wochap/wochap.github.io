import React from 'react'
import {shallow} from 'enzyme'
import SiteHeaderLink from '../SiteHeaderLink'

describe('SiteHeaderLink', () => {
  it('render component', () => {
    const wrapper = shallow(<SiteHeaderLink isHome={false} title='Titulo' />)

    expect(wrapper.length).toBeTruthy()
  })
})
