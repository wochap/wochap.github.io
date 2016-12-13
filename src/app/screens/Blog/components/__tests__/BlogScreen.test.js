import React from 'react'
import {shallow} from 'enzyme'
import BlogScreen from '../BlogScreen'

describe('BlogScreen', () => {
  it('render component', () => {
    const wrapper = shallow(<BlogScreen />)

    expect(typeof wrapper).toEqual('object')
  })
})
