import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import { TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState([])  //state a sob todos

  const addTodo = (todo) => {     //form theke asbe
    // setTodos(todo)  likhle puraton sob value delete hoye jabe, 
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] ) //...prev sob prev spread, id:2,3 deya jay, dynamic value lagbe , Date.now() dilam ; ...todo
  }

  const updateTodo = (id, todo) => { //id match, newtodo 
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo ))) //prevTodo er id ki match kore ? korle todo update, naile prevTodo e thakbe

    //map (sob invidividual todo nilam)

    // prev.map(eachVal)=>{         //evabeo each val check kora jay
    //   if (eachVal.id === id){
    //     todo
    //   }
    // }
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id)) //filter
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } 
    : prevTodo)) //completed overwrite
  }
//Local storage, react a thaka hobe , server side rendering( sob kaj server a , browser a aslam e na) e hobe na 
  useEffect(() => {
    //get
    const todos = JSON.parse(localStorage.getItem("todos")) //key er naam todos rakhlam , Json.parse(string k convert korbe json a)
    
    //set
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])   //eikhaneo set item kora jay, kintu taile everytime get o korbe ...

  //local storage a change(set)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))    //string korbe ..
  }, [todos])     //state er todos ..
  



  return (
    // TodoProvider er value dite hoy
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">

                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full '
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
