import React from 'react'
import SiteHeader from './SiteHeader'

function App (props) {
  return (
    <div>
      <SiteHeader />
      {props.children}
    </div>
  )
}

App.propTypes = {
  children: React.PropTypes.element
}

export default App
