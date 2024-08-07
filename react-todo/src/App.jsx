import React, { useEffect, useState } from 'react';
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'


function App() {
  // const getIniListItem = () =>{
  //   const savedTodoList = localStorage.getItem("savedTodoList");
  //   return savedTodoList ? JSON.parse(savedTodoList) : []; 
  // }
  // const [todoList, setTodoList] =  useState(getIniListItem());
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);
  
  useEffect(() => {
    console.log("Begin of useEffect");

    const fetchData = new Promise((resolve, reject) => {
      // Simulating a delay
      setTimeout(() => {
        resolve({
          data: {
            todoList: [] 
          }
        });
      }, 2000); // a 2-second delay
    });

    // Handling the promise
    fetchData
      .then(message => {
        console.log(message);
      })
      .catch(error => {
        console.error(error);
      });

    return () => {
      console.log("End of useEffect");
    };
  }, []);
  //useEffect(() => {}, []);

  useEffect(() => {
    localStorage.setItem("savedTodoList",JSON.stringify(todoList))
  }, [todoList]);

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
