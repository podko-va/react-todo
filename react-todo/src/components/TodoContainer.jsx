import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'
import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
const viewName = "Grid%20view";
const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
const tableName = import.meta.env.VITE_TABLE_NAME;
const url = `https://api.airtable.com/v0/${baseId}/${tableName}`;
const apiToken = import.meta.env.VITE_AIRTABLE_API_TOKEN;

    //  ?view=${viewName}`; 

function TodoContainer({}) {
      
    
    const getIniListItem = () =>{
        const savedTodoList = localStorage.getItem("savedTodoList");
        return savedTodoList ? JSON.parse(savedTodoList) : []; 
    }
    const [todoList, setTodoList] = useState(getIniListItem());
    /*The "loading..." message in the add while waiting fetching data */
    const [ isLoading, setIsLoading] = useState(true);

  
    useEffect(()=>{
        fetchdata();
    },[]);

    useEffect(() => {
        if (!isLoading) {
        localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
    }, [todoList,isLoading]);

    const addTodo =async (todoTitle) => {
        try {
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
            } catch (error) {
                console.error('Failed to add todo:', error);
            }
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
 
 
 
    const fetchdata = async() =>{
        //const url = `https://api.airtable.com/v0/${baseId}/${tableName}?view=Grid%20view`;
        const url = `https://api.airtable.com/v0/${baseId}/${tableName}?sort[0][field]=title&[direction]=asc`;
        const option  = {
        method: 'GET',
        headers:{
            Authorization: `Bearer ${apiToken}`,
        },
        };
        try {
        const res = await fetch(url,option);
        if (!res.ok){
            console.log(`Error: ${res.status}`);
            //throw new Error(`Error: ${res.status}`)
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

  return (
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
  );
}

TodoContainer.propTypes = {
  tableName: PropTypes.string,
  baseId: PropTypes.string,
  apiToken: PropTypes.string,
};

export default TodoContainer;