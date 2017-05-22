import React from 'react'
import {shallow} from 'enzyme'
import {formatDate} from 'utils/formatter'
import * as mocks from 'utils/mocks'
import Post from '../Post'

describe('Post', () => {
  const props = {
    post: mocks.collectionItem.frontMatter
  }
  const wrapper = shallow(<Post post={props.post} />)

  it('render component', () => {
    expect(wrapper.length).toBeTruthy()
  })

  it('render formatted date', () => {
    const formattedDate = formatDate(props.post.date)

    expect(wrapper.childAt(0).text()).toEqual(formattedDate)
  })

  it('render title', () => {
    expect(wrapper.find('Link').props().children).toEqual(props.post.title)
  })

  it('render link', () => {
    expect(wrapper.find('Link').props().to).toEqual(`/blog/${props.post.fileName}`)
  })
})
