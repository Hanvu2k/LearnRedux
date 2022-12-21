import { combineReducers } from 'redux'
import filterReducer from "../components/Filters/FilterSlice"
import todoListReducer from "../components/TodoList/TodoSlice"

const rootReducer = combineReducers({
    filters: filterReducer,
    todoList: todoListReducer,
})

export default rootReducer