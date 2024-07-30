import React, { children, useEffect, useRef } from 'react';


function InputWithLabel({ id, value, onInputChange, type = 'text', children }) {
    const inputRef = useRef(null);

    useEffect (()=>{
        inputRef.current.focus()
    },[]);
    
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input    
        id={id}
        type={type}
        value={value}
        onChange={(e) => onInputChange(e.target.value)}
        ref = {inputRef}
      />
    </>
  );
}


export default InputWithLabel;