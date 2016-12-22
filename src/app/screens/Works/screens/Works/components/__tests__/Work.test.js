import React from 'react'
import {shallow} from 'enzyme'
import Work from '../Work'

describe('Work', () => {
  it('render component', () => {
    const wrapper = shallow(<Work />)

    expect(typeof wrapper).toEqual('object')
  })
})
