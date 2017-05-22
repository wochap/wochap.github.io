import React from 'react'
import {shallow} from 'enzyme'
import Hero from '../Hero'

describe('Hero', () => {
  it('render component', () => {
    const wrapper = shallow(<Hero />)

    expect(wrapper.length).toBeTruthy()
  })
})
