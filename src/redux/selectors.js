import { createSelector } from '@reduxjs/toolkit'

export const todoListSelector = (state) => state.todoList
export const searchTextSelector = (state) => state.filters.search
export const statusFilterSelector = (state) => state.filters.status
export const priorityFilterSelector = (state) => state.filters.priority

export const todosRemainingSelector = createSelector(
    todoListSelector,
    statusFilterSelector,
    searchTextSelector,
    priorityFilterSelector,
    (todoList, status, searchText, priority) => {
        return todoList.filter((todo) => {
            if (status === 'All') {
                return priority && priority.length ?
                    todo.name.includes(searchText) && priority.includes(todo.priority)
                    :
                    todo.name.includes(searchText)
            }

            return todo.name.includes(searchText) &&
                (
                    status === 'Completed' ?
                        todo.completed :
                        !todo.completed
                ) && (
                    priority && priority.length ? priority.includes(todo.priority) : true
                )
        })
    }
)