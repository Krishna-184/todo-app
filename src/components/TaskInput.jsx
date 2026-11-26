import React, { useState } from 'react'

const TaskInput = ({addTodos}) => {

    const [title, settitle] = useState('')

    const handleChange = () => {

        if (title.trim() === '') return

        addTodos(title)

        settitle('')

    }


  return (
    <div className='flex gap-2'>
      <input value={title} onChange={(e)=>settitle(e.target.value)} type="text" placeholder='Enter a Task...' className='bg-white w-125 p-2 rounded-2xl outline-0 px-3' />
      <button onClick={handleChange} className='bg-blue-500 text-white p-2 rounded-2xl'>+Add Task</button>
    </div>
  )
}

export default TaskInput
