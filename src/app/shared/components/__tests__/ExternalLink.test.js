import React from 'react'
import {shallow} from 'enzyme'
import ExternalLink from '../ExternalLink'

describe('ExternalLink', () => {
  it('render component', () => {
    const wrapper = shallow(<ExternalLink />)

    expect(typeof wrapper).toEqual('object')
  })
})
