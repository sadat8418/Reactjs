import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
// data.followers load korte useLoaderData
//loader manei hover er sathe sathe fetching start

function Github() {
    const data = useLoaderData() //hook for loader
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/sadat8418')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-300 text-black p-4 text-3xl'>Github repos : {data.public_repos}
    <br></br>
   {data. html_url} 

    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sadat8418')
    return response.json()
}