import { useState, useCallback, useEffect, useRef } from 'react'
// import './App.css'

function App() {

  // use state is used to track length
  const [length, setLength] = useState(10)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  // password generator method
  // const passGenerator = useCallback(fn, []) //pass function and dependencies; dependencies in the form of array
  const passGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()~`"

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPass = useCallback(() => {
    passwordRef.current?.select();
    // select range
    // passwordRef.current?.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passGenerator()
  }, [length, numberAllowed, charAllowed, passGenerator])

  return (

    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-600 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shaow rounded lg overflow-hidden mb-4">
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef} />
          <button onClick={copyPass} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input type="range" min={10} max={50} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
            <label>Length: {length}</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={() => {
              setNumberAllowed((prev) => !prev)
            }} />
            <label>Numbers</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input type="checkbox" defaultChecked={charAllowed} id='characterInput' onChange={() => {
              setCharAllowed((prev) => !prev)
            }} />
            <label>Characters</label>
          </div>

        </div>
      </div>
    </>

  )
}

export default App
