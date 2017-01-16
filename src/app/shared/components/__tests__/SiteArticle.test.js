import React from 'react'
import {shallow} from 'enzyme'
import * as mocks from 'utils/mocks'
import SiteArticle from '../SiteArticle'

describe('SiteArticle', () => {
  const props = {
    item: mocks.collectionItem,
    itemState: {
      error: 'An fake error',
      isFetching: true,
      isFulfilled: true
    },
    collectionState: {
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
        isFetching: false,
        isFulfilled: false
      },
      collectionState: {
        isFulfilled: false
      }
    }, () => {
      expect(wrapper.find('NotFoundScreen')).toBeTruthy()
    })
  })
})
