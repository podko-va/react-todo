import React, { children, useEffect, useRef, forwardRef } from 'react';
import style from '../AddTodoForm/AddTodoForm.module.css';
import PropTypes from 'prop-types';

const InputWithLabel = forwardRef(({ id, value, onInputChange, type = 'text', children }, ref) => {
    const inputRef = useRef(null);

    useEffect (()=>{
        inputRef.current.focus()
    },[]);

  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input className={style.button_add_input}   
        id={id}
        type={type}
        value={value}
        onChange={(e) => onInputChange(e.target.value)}
        ref = {inputRef}
      />
    </>
  );
});

InputWithLabel.propTypes = {
  onAddTodo: PropTypes.func, 
};
export default InputWithLabel;