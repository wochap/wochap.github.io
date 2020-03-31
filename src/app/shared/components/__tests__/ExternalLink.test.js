import React from 'react'
import {shallow} from 'enzyme'
import ExternalLink from '../ExternalLink'

describe('ExternalLink', () => {
  it('render children', () => {
    const wrapper = shallow(<ExternalLink>children</ExternalLink>)
    const wrapper2 = shallow(<ExternalLink title='titulo' />)

    expect(wrapper.text()).toEqual('children')
    expect(wrapper2.text()).toEqual('titulo')
  })

  it('render link correctly', () => {
    const wrapper = shallow(<ExternalLink className='class' title='titulo' href='href' />)

    expect(wrapper.html()).toEqual('<a class="class" href="href" title="titulo" target="_blank" rel="noopener noreferrer">titulo</a>')
  })
})
