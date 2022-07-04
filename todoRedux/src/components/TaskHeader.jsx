import React from 'react'
import AddTask from './AddTask'

function TaskHeader() {
  return (
    <div style={{"width":"100%","height":"150px","backgroundColor":"skyblue","margin":"auto"}}>
      <h1 style={{"paddingTop":"20px","textAlign":"center"}}>TODO LIST</h1>
      <AddTask/>
    </div>
  )
}

export default TaskHeader
