import React, { useEffect, useState } from 'react';
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

function useSemiPersistentState(){
  const getIniListItem = () =>{
    const savedTodoList = localStorage.getItem("savedTodoList");
    return savedTodoList ? JSON.parse(savedTodoList) : []; 
  }
  const [todoList, setTodoList] =  useState(getIniListItem());

  useEffect(() => {
    localStorage.setItem("savedTodoList",JSON.stringify(todoList))
  }, [todoList]);
  return [todoList,setTodoList];

}


function App() {
  const [todoList,setTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };  
   return (
    <>
        <h1>Todo list:</h1>
        <AddTodoForm onAddTodo={addTodo} />
        <hr />
        <TodoList todoList={todoList}/>
    </>
  )
}

export default App
