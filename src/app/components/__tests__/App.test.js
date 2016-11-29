import React from 'react'
import {shallow} from 'enzyme'
import App from '../App'

describe('App', () => {
  it('render children', () => {
    const app = shallow(<App>
      <h1>MSG</h1>
    </App>)

    expect(app.find('h1').text()).toEqual('MSG')
  })
})
