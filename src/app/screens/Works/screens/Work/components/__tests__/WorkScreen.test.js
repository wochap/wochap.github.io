import React from 'react'
import {shallow} from 'enzyme'
import {WorkScreen} from '../WorkScreen'

describe('WorkScreen', () => {
  it('render component', () => {
    const wrapper = shallow(<WorkScreen />)

    expect(typeof wrapper).toEqual('object')
  })
})
