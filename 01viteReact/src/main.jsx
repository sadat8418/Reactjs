//import { StrictMode } from 'react'
import  React  from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'


function MyAPp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}
//function 
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }  //random type, prop wala obj cholbe na 

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)



const anotherUser = "Sadat aur react"     //reactElement 

const reactElement = React.createElement(  //babel injects React.createElement
  'a',
  {href: 'https://google.com',target: '_blank' },
  'click me to visit google',
  anotherUser  //variable inject korlam , object a if else lekha jay na , tai evaluated expression
)



createRoot(document.getElementById('root')).render(

  
  // <MyAPp /> 
 // <App />
 reactElement
)
