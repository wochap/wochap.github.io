import React from 'react'
import {shallow} from 'enzyme'
import WorksList from '../WorksList'

describe('WorksList', () => {
  const props = {
    works: [],
  }
  const wrapper = shallow(<WorksList {...props} />)

  it('render component', () => {
    expect(wrapper.length).toBeTruthy()
  })
})
