import { CircleSmall } from 'lucide-react'
import React from 'react'

const TodoStats = ({todos}) => {

    const totalTodos = todos.length
    const completedTodos = todos.filter((todo) => todo.completed).length
    const pendingTodos = todos.filter((todo) => !todo.completed).length
  return (
    <div className='flex items-center gap-2'>
      <CircleSmall className='text-blue-500' /><span>Total {totalTodos}</span>
        <CircleSmall className='text-green-500' /><span>Completed {completedTodos}</span>
        <CircleSmall className='text-red-500' /><span>Pending {pendingTodos}</span>
    </div>
  )
}

export default TodoStats
