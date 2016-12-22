import React from 'react'
import {shallow} from 'enzyme'
import Post from '../Post'

describe('Post', () => {
  it('render component', () => {
    const wrapper = shallow(<Post />)

    expect(typeof wrapper).toEqual('object')
  })
})
