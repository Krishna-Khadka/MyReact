import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5)

  //let counter = 5

  const addValue = () => {
    // console.log("Clicked")
    // counter = counter + 1
    setCounter(counter + 1)
  }

  return (
    <>
      <h1>React Counter</h1>
      <h2>Counter Value: {counter}</h2>
      <button
        onClick={addValue}
      >Add Value</button><br /><br />
      <button>Remove Value</button>
    </>
  )
}

export default App
