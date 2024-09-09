import React, { children, useEffect, useRef, forwardRef } from 'react';
import style from './AddTodoForm.module.css';

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


export default InputWithLabel;