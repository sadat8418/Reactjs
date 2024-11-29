import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, sCounter]  = useState(15)  //setCounter is function who updates, 

  //let counter = 15

  const addValue = () => {
    //console.log("Add value clicked",Math.random())
    //counter = counter + 1
    //console.log(counter) // couter console.log a bartese, UI update hocce na ... //REact controlled UI 
    sCounter(prevCounter => prevCounter + 1)
   //sCounter(counter +1)       //eita dile "const" deya jabe na... 
   if (counter >= 20) {sCounter(counter=20)}
  }

  const removeValue = () => {
    sCounter(counter - 1)
    if (counter <= 0) {sCounter(counter=0)}
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}//onek jaygay counter variable ,use hooks to update in UI

export default App
