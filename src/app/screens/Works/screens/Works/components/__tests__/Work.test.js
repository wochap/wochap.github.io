import React from 'react'
import {shallow} from 'enzyme'
import Work from '../Work'

describe('Work', () => {
  const props = {
    work: {
      imageUrl: '',
      title: '',
      fileName: ''
    }
  }
  const wrapper = shallow(<Work {...props} />)

  it('render component', () => {
    expect(typeof wrapper).toEqual('object')
  })
})
