import React from "react";


function AddTodoForm(props) {
    const handleAddTodo = (event) => {
        event.preventDefault(); // Prevent the default form submission
        const todoTitle = event.target.title.value; // Retrieve the input value
        console.log(todoTitle);
        props.onAddTodo(todoTitle); // Call the callback function passed via props
        
        };
        
    
    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <label htmlFor="title">New title  </label>
                <input type="text" name="title"/>
                <button>Add</button>
            </form>
        </div>
    );
  };

  export default AddTodoForm;