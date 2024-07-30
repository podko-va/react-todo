import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel"


function AddTodoForm({ onAddTodo, todos  }) {
    const [todoTitle,setTodoTitle] = useState('');

    const handleTitleChange = (event) =>{
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
      }
    
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
        console.log('todoTitle');
        onAddTodo({ title: todoTitle, id: Date.now() });
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