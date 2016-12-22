import React from 'react'
import {shallow} from 'enzyme'
import HomeScreen from '../HomeScreen'

describe('HomeScreen', () => {
  it('render component', () => {
    const homeScreen = shallow(<HomeScreen />)

    expect(typeof homeScreen).toEqual('object')
  })
})
