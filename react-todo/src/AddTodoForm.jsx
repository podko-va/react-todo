import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel"


function AddTodoForm({ onAddTodo, todos  }) {
    const [todoTitle,setTodoTitle] = useState('');

    const handleTitleChange = (title) =>{
        setTodoTitle(title)
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
        onAddTodo(todoTitle);
        setTodoTitle(''); // Clear the input field after adding the todo
      };
        
    
    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <InputWithLabel
                    id = "title"
                    label = "New title   "
                    value={todoTitle}
                    type="text"
                    onInputChange={handleTitleChange}
                />
                <button>Add</button>
            </form>
        </div>
    );
  };

  export default AddTodoForm;