import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClickCounter from './components/ClickCounter'
import MouseHover from './components/MouseHover'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hello app component</h1>
      <ClickCounter />
      <MouseHover />
    </>
  )
}

export default App
