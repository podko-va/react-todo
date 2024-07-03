import { useState } from 'react'
import * as React from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'


function App() {
  const [newTodo, setNewTodo] =  useState([]);
   return (
    <>
      <div>
        <h1>Todo list:</h1>
        <AddTodoForm onAddTodo={setNewTodo} />
        <hr />
        <TodoList />
        <p>{newTodo}</p>
      </div>
    </>
  )
}

export default App
