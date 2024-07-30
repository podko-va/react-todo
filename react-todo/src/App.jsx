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

  const addTodo = (todoTitle) => {
    setTodoList([...todoList, { id: Date.now(), title: todoTitle }]);
  };

  const removeTodo = (id) => {
    const updatedTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(updatedTodoList);
  };


   return (
    <>
        <h1>Todo list:</h1>
        <AddTodoForm onAddTodo={addTodo} todos={todoList} />
        <hr />
        <TodoList todos={todoList} onRemoveTodo={removeTodo} />
      </div>

    </>
  )
}

export default App
