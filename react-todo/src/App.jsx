import { useState } from 'react'
import * as React from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'


function App() {
  //const [newTodo, setNewTodo] =  useState([]);
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todoTitle) => {
    setTodoList([...todoList, { id: Date.now(), title: todoTitle }]);
  };

  const removeTodo = (id) => {
    const updatedTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(updatedTodoList);
  };

   return (
    <>
      <div>
        <h1>Todo list:</h1>
        <AddTodoForm onAddTodo={addTodo} todos={todoList} />
        <hr />
        <TodoList todos={todoList} onRemoveTodo={removeTodo} />
      </div>
    </>
  )
}

export default App
