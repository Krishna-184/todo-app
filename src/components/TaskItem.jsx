import { SquareChevronDown } from 'lucide-react'
import React, { useState } from 'react'


const TaskItem = ({todo,deleteTodo,editTodo,toggleComplete}) => {

  const [menuToggle, setMenuToggle] = useState(true)

  const [edit, setEdit] = useState(false)

  const [title, setTitle] = useState(todo.title)

  const handleEdit = () => {
    editTodo(todo.id,title)
    setEdit(false)
    setMenuToggle(true)
  }

  return (
    <div className='bg-white mt-7 w-150 p-3 rounded-xl flex justify-between items-center  gap-3 border-l border-2 border-blue-500 '>
      <div className=' rounded-xl flex flex-col  '>
      <div className='flex gap-2 items-center'>
        <input onClick={()=>toggleComplete(todo.id)} type="checkbox" className='size-4' />
        {
          edit?<input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" className='border-2 border-gray-300 rounded-xl p-1'/>:<h1 className={todo.completed?'line-through':''}>{todo.title}</h1>
        }
      </div>
      <div className='flex gap-5 '>
        <span>{todo.createdAt}</span>
        <p className={todo.completed?'bg-green-100 rounded-3xl w-25 text-center':'bg-gray-100 rounded-3xl w-25 text-center'}>{todo.completed?'completed':'Pending'}</p>
      </div>
    </div>
    <div>
      {
        menuToggle?<SquareChevronDown onClick={()=>setMenuToggle(false)} />:<div className=' p-2  flex gap-2' >
          {
            edit?<button className='bg-blue-500 px-2 py-1' onClick={handleEdit}>Save</button>:<button className='bg-red-500 px-2 py-1' onClick={()=>deleteTodo(todo.id)}>Delete</button>
          }
          {
            edit?<button className='bg-red-500 px-2 py-1' onClick={()=>setEdit(false)}>Cancel</button>:<button className='bg-green-500 px-2 py-1' onClick={()=>setEdit(true)}>Edit</button>
          }
        </div>
      }
    </div>
    </div>
  )
}

export default TaskItem
