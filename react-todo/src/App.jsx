import { useState } from 'react'
import * as React from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'


function App() {
  const [todoList, setTodoList] =  useState([]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };  
   return (
    <>
      <div>
        <h1>Todo list:</h1>
        <AddTodoForm onAddTodo={addTodo} />
        <hr />
        <TodoList todoList={todoList}/>
      </div>
    </>
  )
}

export default App
