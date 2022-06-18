import React from 'react'
import AddTask from './AddTask'
import TaskHeader from './TaskHeader'
import TodoList from './TodoList'

function TodoApp() {
  return (
    <div >
      <TaskHeader/>
      <AddTask/>
      <TodoList/>
    </div>
  )
}

export default TodoApp
