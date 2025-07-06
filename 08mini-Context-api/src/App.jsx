import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* oneke UserContext.Provider লেখে , ফাইল থেকে import না করে 
    
    useContext use koro , data fetch koro from UserContext.js .  */}
    <UserContextProvider>    
    <h1>Hello Sadat </h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
     
    </>
  )
}

export default App
