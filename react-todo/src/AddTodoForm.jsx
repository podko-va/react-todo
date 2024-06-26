import React from "react";


function AddTodoForm() {
    return (
        <div>
            <form>
                <label htmlFor="title">New title</label>
                <input type="TodoTitle"></input>
                <button>Add</button>
            </form>
        </div>
    );
  };

  export default AddTodoForm;