import React from 'react'
import AddTask from './AddTask'
import Nav from './Navbar'
import TaskHeader from './TaskHeader'
import TodoList from './TodoList'

function TodoApp() {
  return (
    <div >
      {/* <Nav/> */}
      <TaskHeader/>
      <AddTask/>
      <TodoList/>
    </div>
  )
}

export default TodoApp
