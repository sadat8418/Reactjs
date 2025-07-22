import {createSlice, nanoid } from '@reduxjs/toolkit';
//Slice is a big reducer, reducer is a function

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({  //createSlice
    name: 'todo',
    initialState,
    reducers: {      //reducer
        addTodo: (state, action) => { //state, action(data)
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo) //array -->push. object hoile properties
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
         // action.payload (je payload (data) dicci seitar soman id jeno na hoy ) 
            //filter বাকি সব true value নিয়ে আসবে
        },
    //update Todo homework 
    }
})
export const {addTodo, removeTodo} = todoSlice.actions //individual action export

export default todoSlice.reducer // store needs every info