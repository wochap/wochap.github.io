import React from 'react'
import {shallow} from 'enzyme'
import SiteError from '../SiteError'

describe('SiteError', () => {
  const wrapper = shallow(<SiteError title="title" message="custom message" />)

  it('render component', () => {
    expect(wrapper.length).toBeTruthy()
  })

  it('render title', () => {
    expect(wrapper.find('.c-site-error__title').text()).toEqual('title')
  })

  it('render message', () => {
    expect(wrapper.find('.c-site-error__message').text()).toEqual('custom message')
  })
})
