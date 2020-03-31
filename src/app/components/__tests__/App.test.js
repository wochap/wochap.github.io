import React from 'react'
import {shallow} from 'enzyme'
import App from '../App'

describe('App', () => {
  it('render children', () => {
    const app = shallow(
      <App routes={[{layoutProps: {}}]}>
        <h1>children</h1>
      </App>,
    )

    expect(app.contains(<h1>children</h1>)).toEqual(true)
  })
})
