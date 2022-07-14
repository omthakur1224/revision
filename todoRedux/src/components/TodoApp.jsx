import React from 'react'
import AddTask from './AddTask'
import Navbar from './Navbar'
import TaskHeader from './TaskHeader'
import TodoList from './TodoList'

function TodoApp() {
  return (
    <div >
      {/* <Navbar/> */}
      <TaskHeader/>
      <TodoList/>
    </div>
  )
}

export default TodoApp
