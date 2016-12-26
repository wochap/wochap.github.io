import React from 'react'
import {shallow} from 'enzyme'
import PostsScreen from '../PostsScreen'

describe('PostsScreen', () => {
  it('render component', () => {
    const wrapper = shallow(<PostsScreen />)

    expect(typeof wrapper).toEqual('object')
  })
})
