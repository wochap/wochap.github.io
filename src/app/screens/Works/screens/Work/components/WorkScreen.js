import React from 'react'
import Hero from 'components/Hero'

function WorkScreen () {
  const data = {
    title: 'Lorem ipsum dolor sit ame sed do eiusmod tempor incididunt ut labore et dolore',
    date: '10 de diciembre 2012',
    role: 'FRontend',
    tasks: 'CSS, JS',
    imageUrl: 'https://drscdn.500px.org/photo/186180867/q%3D80_m%3D1500/b532d32e4bee4ec4109e8d94a1f5813c'
  }

  return (
    <article>
      <Hero data={data} />
      <div className="o-wrapper o-wrapper--3">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </article>
  )
}

export default WorkScreen
