import React from 'react';
import style from './TodoListItem.module.css';
import { useState } from "react";
import PropTypes from 'prop-types';
import ItemEditForm from "./TodoListItemEditForm";

function TodoListItem({ todo, onRemoveTodo, updateData, handleCheck }) {
  const [newTitle, setNewTitle] = useState(todo.title);
  const [editing, setEditing] = useState(true);
  const [checked, setChecked] = useState(todo.isChecked);

  const date =  new Date(todo.date).toLocaleDateString('en-us', { month: 'short', day: 'numeric' });
  console.log(date)
  console.log(todo)
  const handleCheckInput = (e) => {
        setChecked(e.target.checked);
        handleCheck(checked, todo.id);
    };

  return (
      <li className={style.ListItem}>
        {editing ? (
          <div className={style.listContent}>
            <div className={style.titleGroup}>
              <input 
                type="checkbox"
                className={style.checkbox}
                onChange={handleCheckInput}
                checked={todo.isChecked}
                /> 
              <p className={checked ? style.lineThrough : style.label}>
                {newTitle}
              </p>
            </div>
            <div className={style.actionsGroup}>
              <p className={style.date}>{date}</p>
              <div className={style.buttonGroup}>
                <button className={style.button} type="button" onClick={()=>setEditing(false)}>Edit</button>
                <button className={style.button} type="button" onClick={() => onRemoveTodo(todo.id)}>Remove</button>
              </div> 
            </div>
          </div>
              ):(
                  <ItemEditForm 
                      todo={todo}
                      newTitle={newTitle} 
                      setNewTitle={setNewTitle} 
                      updateData={updateData} 
                      setEditing={setEditing}
                  />
              )}
      </li>  
  );
}


TodoListItem.propTypes = {
  todo: PropTypes.object,
  onRemoveItem: PropTypes.func,
  updateDate: PropTypes.func,
  handleCheck: PropTypes.func,
};

export default TodoListItem;

