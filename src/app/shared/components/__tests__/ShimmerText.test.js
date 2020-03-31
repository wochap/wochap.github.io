import React from 'react'
import {shallow} from 'enzyme'
import ShimmerText from '../ShimmerText'

describe('ShimmerText', () => {
  it('render component', () => {
    const wrapper = shallow(<ShimmerText />)

    expect(wrapper.length).toBeTruthy()
  })

  it('render component with darken modifier', () => {
    const wrapper = shallow(<ShimmerText darken />)

    expect(wrapper.length).toBeTruthy()
    expect(wrapper.hasClass('c-shimmer-text--darken')).toBeTruthy()
  })

  it('render text children', () => {
    const wrapper = shallow(<ShimmerText>fake text</ShimmerText>)
    const wrapper2 = shallow(<ShimmerText text='fake text' />)

    expect(wrapper.length).toBeTruthy()
    expect(wrapper.text()).toEqual('fake text')
    expect(wrapper2.length).toBeTruthy()
    expect(wrapper2.text()).toEqual('fake text')
  })
})
