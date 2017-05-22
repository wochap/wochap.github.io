import React from 'react'
import {shallow} from 'enzyme'
import AppLayout from '../AppLayout'

describe('AppLayout', () => {
  it('render component', () => {
    const wrapper = shallow(<AppLayout />)

    expect(wrapper.length).toBeTruthy()
  })
})
