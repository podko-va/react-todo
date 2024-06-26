import React from "react";


const todoList = [
    { id: 1, title: 'Finish React assignment' },
    { id: 2, title: 'Read book' },
    { id: 3, title: 'Go to slip' },
  ];

  function TodoList() {
    return (
       <ul style={{ textAlign: 'left' }}>
        {todoList.map(function (item){
            return (
                <li key={item.objectID}>
                    <span>{item.title}</span>
                </li>
            );
            })} 
        </ul>
    );
  };

  export default TodoList;