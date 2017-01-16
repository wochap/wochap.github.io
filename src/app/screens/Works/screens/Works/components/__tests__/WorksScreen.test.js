import React from 'react'
import {shallow} from 'enzyme'
import {WorksScreen} from '../WorksScreen'

describe('WorksScreen', () => {
  it('render component', () => {
    const wrapper = shallow(<WorksScreen />)

    expect(typeof wrapper).toEqual('object')
  })
})
