import React, { useState, useRef, useEffect } from "react";
import InputWithLabel from "./InputWithLabel"


function AddTodoForm({ onAddTodo, todos  }) {
    const [todoTitle,setTodoTitle] = useState('');
    
    const handleTitleChange = (title) => {
        setTodoTitle(title);
      };
    
    const handleAddTodo = (event) => {
        event.preventDefault();
        if (todoTitle.trim() === '') {
            alert('Todo title cannot be empty');
            return;
          }
          if (todos.some(todo => todo.title === todoTitle)) {
            alert('Todo title already exists');
            return;
          }
        if (todoTitle.length > 100) {
            alert('Todo title cannot exceed 100 characters');
            return;
        }
        console.log(todoTitle);
        onAddTodo(todoTitle);
        setTodoTitle(''); 
        
      };

    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <InputWithLabel
                    label = "New title   "
                    value={todoTitle}
                    type="text"
                    onInputChange={handleTitleChange}
                    placeholder="Enter todo title"  
                />
                <button>Add</button>
            </form>
        </div>
    );
  };

  export default AddTodoForm;