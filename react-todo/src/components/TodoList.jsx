import React from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';

function TodoList({ todos, onRemoveTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
      ))}
    </ul>
  );

}

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func, 
};

export default TodoList;
