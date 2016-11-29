import React from 'react'
import {shallow} from 'enzyme'
import NotFoundScreen from '../NotFoundScreen'

describe('NotFoundScreen', () => {
  it('render title', () => {
    const notFoundScreen = shallow(<NotFoundScreen />)

    expect(notFoundScreen.find('h1').text()).toEqual('404')
  })
})
