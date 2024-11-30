import { useState } from "react"
//import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
        <button
          onClick={() => setColor("olive")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "olive"}}
          >Olive</button>
          <button
          onClick={() => setColor("Gray")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Gray"}}
          >Gray</button>
          <button
          onClick={() => setColor("yellow")}
           className=" text-white font-bold px-4 py-1  shadow-lg block relative -inset-1 -skew-y-3 bg-pink-500 "
          style={{backgroundColor: "yellow"}}
          >yellow</button>
          <button
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-pink-500 shadow-lg hover:underline"
          style={{backgroundColor: "pink"}}
          >pink</button>
          <button
          onClick={() => setColor("purple")}
          className="bg-purple-400 hover:bg-purple-600 active:bg-purple-800 px-4 py-1 rounded-full text-white shadow-lg"
          //style={{backgroundColor: "purple"}}
          >purple</button>
          <button
          onClick={() => setColor("lavender")}
          className= "focus:outline-none focus:ring focus:border-blue-500 px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "lavender"}}
          >lavender</button>
          <button
          onClick={() => setColor("white")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg hover:px-6"
          style={{backgroundColor: "white"}}
          >white</button>
          <button
          onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:py-2"
          style={{backgroundColor: "black"}}
          >black</button>
        </div>
       
      </div>
      
    </div>

    <div class="outline-none px-72 py-72 rounded-full text-black ">
    <img src="https://via.placeholder.com/300x200" alt="Stylish Image" class="sexy-image" />
  </div>
    </>
  )
}

export default App
