import React from 'react';
import style from './TodoListItem.module.css';

function TodoListItem({ todo, onRemoveTodo }) {
  return (
     <li className={style.ListItem}>
        {todo.title}
        <button className={style.button} type="button" onClick={() => onRemoveTodo(todo.id)}>Remove</button>
      </li>  
  );
}

export default TodoListItem;

