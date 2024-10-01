import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import PropTypes from 'prop-types';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired, 
};


export default AddTodoForm;