import React from 'react'
import {shallow} from 'enzyme'
import MarkdownBody from '../MarkdownBody'

describe('MarkdownBody', () => {
  it('render html', () => {
    const wrapper = shallow(<MarkdownBody html="<h1>HOLA</h1>" />)

    expect(wrapper.html()).toEqual('<div class="o-wrapper o-wrapper--3 c-markdown-body"><h1>HOLA</h1></div>')
  })

  it('render ShimmerText if is loading', () => {
    const wrapper = shallow(<MarkdownBody isLoading />)

    expect(wrapper.find('ShimmerText').length).toBeTruthy()
  })
})
