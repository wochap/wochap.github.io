import React from 'react'
import {shallow} from 'enzyme'
import HomeScreen from '../HomeScreen'

describe('HomeScreen', () => {
  const homeScreen = shallow(<HomeScreen />)

  it('render component', () => {
    expect(homeScreen.length).toBeTruthy()
  })

  it('render ScreenHelmet', () => {
    expect(homeScreen.find('ScreenHelmet').length).toBeTruthy()
  })
})
