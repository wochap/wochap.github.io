import React from 'react'
import {shallow} from 'enzyme'
import {formatDate} from 'utils/formatter'
import * as mocks from 'utils/mocks'
import Post from '../Post'

describe('Post', () => {
  const postProp = mocks.itemCollection.frontMatter
  const wrapper = shallow(<Post post={postProp} />)

  it('render component', () => {
    expect(wrapper.length).toBeTruthy()
  })

  it('render formatted date', () => {
    const formattedDate = formatDate(postProp.date)

    expect(wrapper.childAt(0).text()).toEqual(formattedDate)
  })

  it('render title', () => {
    expect(wrapper.find('Link').props().children).toEqual(postProp.title)
  })

  it('render link', () => {
    expect(wrapper.find('Link').props().to).toEqual(`/blog/${postProp.fileName}`)
  })
})
