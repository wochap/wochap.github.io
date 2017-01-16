import React from 'react'
import {shallow} from 'enzyme'
import WorksList from '../WorksList'

describe('WorksList', () => {
  it('render component', () => {
    const wrapper = shallow(<WorksList />)

    expect(wrapper.length).toBeTruthy()
  })
})
