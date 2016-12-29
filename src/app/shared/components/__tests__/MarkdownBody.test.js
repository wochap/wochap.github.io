import React from 'react'
import {shallow} from 'enzyme'
import MarkdownBody from '../MarkdownBody'

describe('MarkdownBody', () => {
  it('render html', () => {
    const wrapper = shallow(<MarkdownBody html="<h1>HOLA</h1>" />)

    expect(wrapper.html()).toEqual('<div class="c-markdown-body"><h1>HOLA</h1></div>')
  })
})
