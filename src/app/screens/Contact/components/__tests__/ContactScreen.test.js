import React from 'react'
import {shallow} from 'enzyme'
import ContactScreen from '../ContactScreen'

describe('ContactScreen', () => {
  it('render component', () => {
    const wrapper = shallow(<ContactScreen />)

    expect(typeof wrapper).toEqual('object')
  })
})
