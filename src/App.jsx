import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import { nanoid } from "nanoid";
import TodoStats from './components/TodoStats';

const App = () => {

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  )
   console.log(todos)

  const [filter, setFilter] = useState('all')

  const addTodos = (title) => {

    const todo = {
      id:nanoid(),
      title,
      completed:false,
      createdAt: new Date().toLocaleTimeString([],{
        hour:'2-digit',
        minute: '2-digit' 
      })
    }

    const arr = [...todos,todo]

    setTodos(arr)
    localStorage.setItem('todos',JSON.stringify(arr))

  }

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)

    localStorage.setItem('todos',JSON.stringify(updatedTodos))

  }

  const editTodo = (id,title) => {
    const updatedTodos = todos.map((todo) => {
      if(todo.id === id){
        return {...todo, title: title}
      }
      return todo
    })
    setTodos(updatedTodos)

    localStorage.setItem('todos',JSON.stringify(updatedTodos))
  }

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if(todo.id === id){
        return {...todo, completed: !todo.completed}
      }
      return todo
    })
    setTodos(updatedTodos)

    localStorage.setItem('todos', JSON.stringify(updatedTodos))
  }

  const filterTodos = (filter) => {
    if(filter === 'all'){
      return todos
    }else if(filter === 'pending'){
      return todos.filter((todo) => !todo.completed)
    }else if(filter === 'completed'){
      return todos.filter((todo) => todo.completed)
    }

    return todos
  }

  const filteredTodos = filterTodos(filter)


  return (
    <div className='min-h-screen font-mono bg-gray-100 items-center justify-center'>
      <Navbar/>
      <main className='max-w-6xl ms-auto p-6 '>
        <div>
          <h1 className='text-3xl font-bold'>Your Tasks</h1>
          <h3>Stay organized. Keep it simple</h3>
        </div>
        <div className='mt-5'>
          <TodoStats todos={todos} />
        </div>
        <div className='mt-5'>
          <TaskInput addTodos={addTodos}/>
        </div>
        <div className='flex gap-4 mt-3'>
          <h1 onClick={()=>setFilter('all')} className='bg-white rounded-2xl w-20 text-center'>All</h1>
          <h1 onClick={()=>setFilter('pending')} className='bg-white rounded-2xl w-20 text-center'>Pending</h1>
          <h1 onClick={()=>setFilter('completed')} className='bg-white rounded-2xl w-25 text-center'>Completed</h1>
        </div>
        <div>
          <TaskList todos={filter} deleteTodo={deleteTodo} editTodo={editTodo} toggleComplete={toggleComplete} filteredTodos={filteredTodos}  />
        </div>
      </main>
    </div>
  )
}

export default App
