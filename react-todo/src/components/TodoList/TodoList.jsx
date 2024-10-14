import React, { useEffect, useState } from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import PropTypes from 'prop-types';
import style from '../TodoListItem/TodoListItem.module.css';

function TodoList({ todos, onSort, onRemoveTodo, updateData, handleCheck }) {
  const [isAscending, setIsAscending] = useState(true); 
  const [isDateAscending, setIsDateAscending] = useState(true);
  
  const SortToggle = () => {
    if (isAscending) {
      onSort('titleDesc'); 
    } else {
      onSort('titleAsc'); 
    }
    setIsAscending(!isAscending);
  }; 

  const SortToggleDate = () => {
    setIsDateAscending(!isDateAscending); 
    onSort(isDateAscending ? 'dateDesc' : 'dateAsc'); 
  };  
  
  return (
    <div>
      <div className={style.buttonContainer}>
        <button className={style.buttonspace} type="button" onClick={SortToggle}>
          Sort by title ({isAscending ? 'A->Z' : 'Z->A'})
        </button>
        <button className={style.buttonspace} type="button" onClick={SortToggleDate}>
          Sort by date ({isDateAscending ? 'Newest' : 'Oldest'})
        </button>
      </div>

      <ul className={style.listSpacing}>      
        {todos.map(todo => (
          <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} updateData={updateData} handleCheck={handleCheck}/>
        ))}
      </ul>
    </div>
  );

}

TodoList.propTypes = {
  todoList: PropTypes.array,
  onSort: PropTypes.func,
  onRemoveTodo: PropTypes.func, 
};

export default TodoList;
