import React from 'react'
import Cart from '../../public/test'

function Card({username, btnText="visit me", src= "https://images.pexels.com/photos/596893/pexels-photo-596893.jpeg?auto=compress&cs=tinysrgb&w=600&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"}) {  // Card(props) //deafult value btnText set korlam
    //console.log(username);
  return (
    <div className="relative h-[400px] w-[300px] rounded-md ">
  <img
    src ={src} 
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{username}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {btnText } →
    </button>
  </div>
</div>
  )
}

export default Card