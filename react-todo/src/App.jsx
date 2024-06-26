import { useState } from 'react'
import * as React from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'


// const todoListItem = [
//   { id: 1, title: 'Finish React assignment' },
//   { id: 2, title: 'Read book' },
//   { id: 3, title: 'Go to slip' },
// ];//

function App() {
   return (
    <>
      <div>
        <h1>Todo list:</h1>
        <AddTodoForm />
        <hr />
        <TodoList />
      </div>
    </>
  )
}

export default App
