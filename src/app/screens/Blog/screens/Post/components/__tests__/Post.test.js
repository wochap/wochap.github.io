import React from 'react'
import {shallow} from 'enzyme'
import PostScreen from '../PostScreen'

describe('PostScreen', () => {
  it('render component', () => {
    const wrapper = shallow(<PostScreen />)

    expect(typeof wrapper).toEqual('object')
  })
})
