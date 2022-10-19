// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  // React.Children is basically [].map() but accounts for all the posibilities on React components
  return React.Children.map(children, child => {
    // account for normal html elements
    // Could restrict allowed types here instead (typescript or some .type logic)
    if (typeof child.type === 'string') {
      return child
    }
    const newChild = React.cloneElement(child, {on, toggle})
    // console.log(newChild.type)
    return newChild
  })
}

const ToggleOn = ({on, children}) => (on ? children : null)
const ToggleOff = ({on, children}) => (on ? null : children)
const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />

function App() {
  return (
    <div>
      <Toggle>
        <div>
          <span>Toggling</span>
        </div>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
