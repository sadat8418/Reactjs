import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0) //hooks are funtion , count variable, setCount func  reference

  return (
    <>
     <h1 className='text-3xl bg-orange-500'> Currency app with tea</h1>
    </>
  )
}

export default App
