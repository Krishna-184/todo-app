import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({filter,deleteTodo,editTodo,toggleComplete,filteredTodos}) => {
  return (
    <div>
        {
            filteredTodos.map((todo)=><TaskItem key={todo.id} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo} toggleComplete={toggleComplete}  />)
        }
    </div>
  )
}

export default TaskList
