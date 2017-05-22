import React from 'react'
import {shallow} from 'enzyme'
import AboutScreen from '../AboutScreen'

describe('AboutScreen', () => {
  const aboutScreen = shallow(<AboutScreen />)

  it('render component', () => {
    expect(aboutScreen.length).toBeTruthy()
  })

  it('render ScreenHelmet', () => {
    expect(aboutScreen.find('ScreenHelmet').length).toBeTruthy()
  })
})
