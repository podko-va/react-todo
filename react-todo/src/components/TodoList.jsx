import React, { useEffect, useState } from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';
import style from './TodoListItem.module.css';

function TodoList({ todos, onSort, onRemoveTodo }) {
  const [isAscending, setIsAscending] = useState(true); 
  
  const SortToggle = () => {
    if (isAscending) {
      onSort('titleDesc'); 
    } else {
      onSort('titleAsc'); 
    }
    setIsAscending(!isAscending);
  }; 
  
  
  return (
    <div>
      <button className={style.buttonspace} type="button" onClick={SortToggle}>
          Sort by title ({isAscending ? 'A->Z' : 'Z->A'}) {}
        </button>

      <ul className={style.listSpacing}>      
        {todos.map(todo => (
          <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
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
