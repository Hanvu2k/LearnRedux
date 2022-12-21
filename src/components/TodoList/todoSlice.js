import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: "todoList",
    initialState: [
        { id: 1, name: 'Learn redux', completed: false, priority: 'Medium' },
        { id: 2, name: 'Learn redux', completed: true, priority: 'Low' },
        { id: 3, name: 'Learn redux', completed: false, priority: 'High' },
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload)
            if (currentTodo) { currentTodo.completed = !currentTodo.completed }
        }
    }
})