import React from 'react'
import {shallow} from 'enzyme'
import HomeScreen from '../HomeScreen'

describe('HomeScreen', () => {
  it('render title', () => {
    const homeScreen = shallow(<HomeScreen />)

    expect(homeScreen.find('h1').text()).toEqual('Home')
  })
})
