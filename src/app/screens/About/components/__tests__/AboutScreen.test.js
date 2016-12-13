import React from 'react'
import {shallow} from 'enzyme'
import AboutScreen from '../AboutScreen'

describe('AboutScreen', () => {
  it('render component', () => {
    const wrapper = shallow(<AboutScreen />)

    expect(typeof wrapper).toEqual('object')
  })
})
