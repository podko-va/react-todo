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
  // const [todoList, setTodoList] =  useState(getIniListItem());
  const [todoList, setTodoList] = useState(getIniListItem());
  const [ isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }},
  [todoList,isLoading]);
  
  useEffect(() => {
    console.log("Begin of useEffect");

    const fetchData = new Promise((resolve, reject) => {
      // Simulating a delay
      setTimeout(() => {
        resolve({
          data: {
            todoList: getIniListItem() 
          }
        });
      }, 2000); // a 2-second delay
    });

    // Handling the promise
    fetchData
      .then(response => {
        console.log("Fetched data:", response);
        setTodoList(response.data.todoList);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
      });

    return () => {
      console.log("End of useEffect");
    };
  }, []);
  //useEffect(() => {}, []);

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
        {isLoading ? ( // Show loading sign
          <p>Loading...</p>
        ) :
        (
          <>
            <AddTodoForm onAddTodo={addTodo} todos={todoList} />
            <hr />
            <TodoList todos={todoList} onRemoveTodo={removeTodo} />
          </>
        )}
      </div>
    </>
  )
}

export default App
