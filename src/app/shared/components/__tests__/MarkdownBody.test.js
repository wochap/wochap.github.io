import React from 'react'
import {shallow} from 'enzyme'
import MarkdownBody from '../MarkdownBody'

describe('MarkdownBody', () => {
  it('render html', () => {
    const wrapper = shallow(<MarkdownBody html="<h1>HOLA</h1>" />)

    expect(wrapper.html()).toEqual('<div class="c-markdown-body"><h1>HOLA</h1></div>')
  })

  it('render lorem if is loading', () => {
    const wrapper = shallow(<MarkdownBody isLoading />)

    expect(wrapper.find('ShimmerText').props().text).toEqual('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
  })
})
