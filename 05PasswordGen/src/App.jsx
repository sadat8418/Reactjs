import { useState } from 'react'

import { useCallback,useEffect, useRef } from 'react'
// useCallback is for optimization, useRef for color change during copy, useEffect actually does the main work & Effects all 

// import './App.css'
// Optimized way sob update, copy
function App() {
  const [length, setLength] = useState(8) //length koto boro ?
  const [numberAllowed, setNumberAllowed] = useState(false)  //Numbers neo or na neo ...
  const [charAllowed, setcharAllowed] = useState(false)
  const[password, setPassword] = useState ("") //automatically password show kore ... 

  //useRef
  const passwordRef = useRef(null)
  //const cachedFn = useCallback(fn, dependencies)
  //password generator bar bar call hocce, number, char a
  const passwordGenerator = useCallback(()=> {  //use callback .. memorization (cache) a rakhse
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"// create pass using string
    if (numberAllowed) str += "0123456789" 
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`" //special char

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)   //pass a value asbe
      
    }

    setPassword(pass)  //pass set korlam
}, [ length, numberAllowed, charAllowed, setPassword ]) //setPassword is for optimaztion ,without it will work   //Optimization cache a rakhar jonno //useCallback (optimization)

const copyPasswordToClipboard= useCallback(()=>{
  passwordRef.current?.select() //ei jonno passwordRef(useRef hook) .. colour change when copied
  passwordRef.current?.setSelectionRange(0,9)  //range porjonto copy hobe
  window.navigator.clipboard.writeText(password)    //nextjs a server side rendering hoy, window nai
},[password])

  // password generator is being called 3-4 times  ..  optimization ? useCallback ( cache a rakhe)
  //dependencies .. numberAllowed, charAllowed 

  // passwordGenerator() //eivabe calling possible na , 1 way is button lagay call another is useEffect hook 

  //RERUN if any change in length , number char, pass
  useEffect(()=>{passwordGenerator()},[length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>

     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
     <h1 className='text-4xl text-center text-white my-3'>Password Generator</h1>

  
    
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>

    <input 
    type='text'
    value={password}
    className='outline-none w-full py-1 px-3'
    placeholder='password'
    readOnly
    ref={passwordRef} 
    ></input> 
     <button
         onClick={copyPasswordToClipboard} //method created
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        

    </div> 
    <div className='flex text-sm gap-x-2'>
      <div className="flex items-center gap-x-1">
      <input 
        type="range"
        min={4}
        max={12}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      
      </div>
      <div className="flex items-center gap-x-1">

      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);  //prevCounter er moto (previous react vdos)
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setcharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
     
     </div>
    </>
  )
}

export default App
