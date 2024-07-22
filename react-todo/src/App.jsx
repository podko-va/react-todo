import React, { useEffect, useState } from 'react';
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'


function App() {
  const getIniListItem = () =>{
    const savedTodoList = localStorage.getItem("savedTodoList");
    return savedTodoList ? JSON.parse(savedTodoList) : []; 
  }
  const [todoList, setTodoList] =  useState(getIniListItem());

  useEffect(() => {
    localStorage.setItem("savedTodoList",JSON.stringify(todoList))
  }, [todoList]);

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
