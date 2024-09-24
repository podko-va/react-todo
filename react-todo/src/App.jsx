import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'
import './App.css';

const apiToken = import.meta.env.VITE_AIRTABLE_API_TOKEN;
const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
const tableName = import.meta.env.VITE_TABLE_NAME;
const url = `https://api.airtable.com/v0/${baseId}/${tableName}`;

function App() {
  const getIniListItem = () =>{
    const savedTodoList = localStorage.getItem("savedTodoList");
    return savedTodoList ? JSON.parse(savedTodoList) : []; 
  }
  const [todoList, setTodoList] = useState(getIniListItem());
  const [ isLoading, setIsLoading] = useState(true);

  const fetchdata = async() =>{
    const option  = {
      method: 'GET',
      headers:{
        Authorization: `Bearer ${apiToken}`,
      },
    };
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


  const addTodo =async (todoTitle) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fields: { title: todoTitle } }),
    });
  
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
  
    const data = await response.json();
    setTodoList([...todoList, { id: data.id, title: data.fields.title }]);

    //setTodoList([...todoList, { id: Date.now(), title: todoTitle }]);
  };

  const removeTodo = async (id) => {
    const options = {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };
    const url_for_delete = url + `/${id}`
    try {
      const response = await fetch(url_for_delete, options);
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
    const updatedTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(updatedTodoList);
    } catch (error) {
    console.error('Failed to delete todo:', error);
  }
  };

 return (
  
    <BrowserRouter >
        <Routes>
          <Route path='/' element={
            <div className="root">
              <div className="card">
                <>            
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
                  
                  </>
                  <div className="footer">
                    <a href="/" className="logo">
                      <img src="../tumbup.png" alt="Logo" />
                    </a>
                  </div>
                </div>              
              </div>                       
          }          
          />
          <Route path='/new' element={<h1>New todo list:</h1>}/>
        </Routes>
      </BrowserRouter>
      
    )
}

export default App
