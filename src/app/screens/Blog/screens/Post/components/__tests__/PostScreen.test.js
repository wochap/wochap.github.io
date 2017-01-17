import React from 'react'
import {shallow} from 'enzyme'
import {PostScreen} from '../PostScreen'

describe('PostScreen', () => {
  const wrapper = shallow(<PostScreen />)

  it('render component', () => {
    expect(wrapper.length).toBeTruthy()
  })
})
