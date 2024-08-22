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
  //airtable



  const [todoList, setTodoList] = useState(getIniListItem());
  const [ isLoading, setIsLoading] = useState(true);

  const apiToken = import.meta.env.VITE_AIRTABLE_API_TOKEN;
  const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
  const tableName = import.meta.env.VITE_TABLE_NAME;

  const fetchdata = async() =>{
    const option  = {
      method: 'GET',
      headers:{
        Authorization: `Bearer ${apiToken}`,
      },
    };
    const url = `https://api.airtable.com/v0/${baseId}/${tableName}`;
    
    try {
      const res = await fetch(url,option);
      if (!res.ok){
        throw new Error(`Error: ${res.status}`)
      }
      const data = await res.json();

      console.log(data);
      const fetchDataFromAirtable = data.records.map(record =>({
        id:record.id,
        title:record.fields.title
      }));

      setTodoList(fetchDataFromAirtable)
      setIsLoading(false)

    } catch (error) {
      console.log(error)
    }
  };

  useEffect(()=>{
    fetchdata();
  },[]);

  useEffect(() => {
    if (!isLoading) {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }
  }, [todoList,isLoading]);


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
