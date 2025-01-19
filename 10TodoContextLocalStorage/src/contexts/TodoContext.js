import {createContext, useContext} from "react"
 
//createContext , context api .. 
export const TodoContext = createContext({
    todos: [
        {
            id: 1,              //for every todo , will increment in future .. 
            todo: " Todo msg",
            completed: false,
        }
    ],

    addTodo: (todo) => {}, //method call,function kisu kaj korbe,  ki korbe? App.jsx jane
    //onnek boro project er jonno context api na, redux use hoy... (karon eivabe funtion define) 
    updateTodo: (id, todo) => {},  //value todo thekei nibo,
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider