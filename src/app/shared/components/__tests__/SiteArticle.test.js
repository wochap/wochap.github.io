import React from 'react'
import {shallow} from 'enzyme'
import * as mocks from 'utils/mocks'
import SiteArticle from '../SiteArticle'

describe('SiteArticle', () => {
  const props = {
    head: {
      canonicalHref: ''
    },
    item: mocks.collectionItem,
    itemState: {
      error: 'An fake error',
      isPending: true,
      isFulfilled: true
    },
    collectionState: {
      error: false,
      isPending: false,
      isFulfilled: true
    }
  }
  const wrapper = shallow(<SiteArticle {...props} />)

  it('render component', () => {
    expect(wrapper.length).toBeTruthy()
  })

  it('render error component', () => {
    expect(wrapper.find('SiteError').length).toBeTruthy()
  })

  it('render NotFoundScreen on init', () => {
    wrapper.setProps({
      itemState: {
        error: false,
        isPending: false,
        isFulfilled: false
      },
      collectionState: {
        error: false,
        isPending: false,
        isFulfilled: false
      }
    })

    expect(wrapper.find('NotFoundScreen')).toBeTruthy()
  })
})
