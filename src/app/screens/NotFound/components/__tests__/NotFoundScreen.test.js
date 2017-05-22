import React from 'react'
import {shallow} from 'enzyme'
import data from 'app/config/data'
import NotFoundScreen from '../NotFoundScreen'

describe('NotFoundScreen', () => {
  const wrapper = shallow(<NotFoundScreen />)

  it('render component', () => {
    expect(wrapper.length).toBeTruthy()
  })

  it('render SiteError with correct props', () => {
    expect(wrapper.find('SiteError').props().headTitle).toEqual(data.screens.notFound.title)
    expect(wrapper.find('SiteError').props().title).toEqual('404')
    expect(wrapper.find('SiteError').props().message).toEqual('Pagina no encontrada')
  })
})
