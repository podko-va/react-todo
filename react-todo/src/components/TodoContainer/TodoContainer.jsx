import TodoList from '../TodoList/TodoList'
import AddTodoForm from '../AddTodoForm/AddTodoForm'
import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
const viewName = "Grid%20view";
const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
const tableName = import.meta.env.VITE_TABLE_NAME;
const url = `https://api.airtable.com/v0/${baseId}/${tableName}`;
const apiToken = import.meta.env.VITE_AIRTABLE_API_TOKEN;

    //  ?view=${viewName}`; 

function TodoContainer({flag=0}) {
      
    const getIniListItem = () =>{
        const savedTodoList = localStorage.getItem("savedTodoList");
        return savedTodoList ? JSON.parse(savedTodoList) : []; 
    }
    const [todoList, setTodoList] = useState([]);
    /*The "loading..." message in the add while waiting fetching data */
    const [isLoading, setIsLoading] = useState(true);
    const [sortDirection, setSortDirection] = useState("");

  
    useEffect(()=>{
        fetchdata(flag);
    }, [flag]);

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
            setTodoList([...todoList, { id: data.id, title: data.fields.title, date: data.createdTime,
              isChecked: Boolean(data.fields.isChecked),}]);
            sortList(sortDirection);
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

  const updateData = async (newTitle, id) => {
      const options = {
      method: 'PATCH',
      headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
          'Content-Type': 'application/json',
          },
      body: JSON.stringify({ fields: { title: newTitle } }),
      };
      console.log(newTitle);
      const url_for_update = url + `/${id}`
      try {
      const response = await fetch(url_for_update, options);
      if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
      } catch (error) {
        console.error('Failed to update todo:', error);
      }
  };

  const handleCheck = async(checked, id) => {
    const options = {
      method: 'PATCH',
      headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
          'Content-Type': 'application/json',
          },
      body: JSON.stringify({ fields: { isChecked: Boolean(!checked), } }),
      };
    const url_for_checked = url + `/${id}`     

    try {
        const response = await fetch(url_for_checked, options);
        if (!response.ok) {
        const message = `Error has occurred:
            ${response.status}`;
            throw new Error(message);
        }
        const checkedTodo = todoList.map(todo => {
            if (todo.id === id) {
                let checkedItem = {
                    ...todo, 
                    isChecked: Boolean(!todo.isChecked),
                };
                return checkedItem;
            } else {
                return todo;
            }
        });
        setTodoList(checkedTodo);
    } catch (error) {
      console.error('Failed to make checked/unchecked todo:', error);
    }
  };

  const sortList = (sortDirection) => {
    switch (sortDirection) {
      case "titleAsc":
        onSortByTitle(true);  // Сортировка по заголовку по возрастанию
        break;
      case "titleDesc":
        onSortByTitle(false);  // Сортировка по заголовку по убыванию
        break;
      case "dateAsc":
        onSortByDate(true);  // Сортировка по дате по возрастанию
        break;
      case "dateDesc":
        onSortByDate(false);  // Сортировка по дате по убыванию
        break;
      default:
        onSortByTitle(true);  // Сортировка по заголовку по умолчанию
    }
    setSortDirection(sortDirection);
  };

  const onSortByTitle = (isAscending) => {
        function sortData(a, b) {
          if (a.title > b.title) {
            return isAscending ? 1 : -1; 
          }
          if (a.title < b.title) {
            return isAscending ? -1 : 1; 
          }
          return 0; 
        };
      
        setTodoList((oldTodoList) => [...oldTodoList].sort(sortData));
    };
    
    const onSortByDate = (isAscending) => {
      function sortData(a, b) {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return isAscending ? dateA - dateB : dateB - dateA;
      }
    
      setTodoList((oldTodoList) => [...oldTodoList].sort(sortData));
    };
    
    const fetchdata = async(flag) =>{
        //const url = `https://api.airtable.com/v0/${baseId}/${tableName}?view=Grid%20view`;
        const url = `https://api.airtable.com/v0/${baseId}/${tableName}`;
        //?sort[0][field]=title&[direction]=asc`;
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

        //console.log(data);
        const fetchDataFromAirtable = data.records
        .filter(record => {
            // Получаем значение isChecked
            const isChecked = Boolean(record.fields.isChecked);
            
            // Условие для фильтрации в зависимости от значения flag
            if (flag === 'all') {
                return true; // Выводим все записи
            } else if (flag === 'completed') {
                return Boolean(record.fields.isChecked); // Выводим только записи с isChecked = true
            } else if (flag === 'pending') {
                return !Boolean(record.fields.isChecked); // Выводим только записи с isChecked = false
            }
            
            return false; // Если flag не совпадает ни с одним значением, ничего не выводим
            })
            .map(record => ({
                id: record.id,
                title: record.fields.title,
                date: record.createdTime,
                isChecked: Boolean(record.fields.isChecked),
            }));
        function sortData(a, b) {
            if (a.title < b.title) {
              return -1;
            }
            if (a.title > b.title) {
              return 1;
            }
            return 0;
          }
        setTodoList([...fetchDataFromAirtable].sort(sortData))
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
                <TodoList todos={todoList} onSort={sortList} onRemoveTodo={removeTodo} updateData={updateData}
                        handleCheck={handleCheck}/>
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