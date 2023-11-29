import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
import Register from './Components/Register'

function App() {
  //props make component reusable

  return (
    <>
      <h1 className='bg-green-500'>Props & Tailwind</h1>
      <Card user="John Doe" btnText="Know Me"/>
      <Card />
      <Register labelName="Enter your full Name"/>
    </>
  )
}

export default App
