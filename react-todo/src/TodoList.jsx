import React from "react";
import TodoListItem from './TodoListItem'

const todoList = [
    { id: 1, title: 'Finish React assignment' },
    { id: 2, title: 'Read book' },
    { id: 3, title: 'Go to slip' },
  ];

function TodoList() {
    return (
      <ul>
        {todoList.map((item) => (
          <TodoListItem key={item.id} todo={item} />
        ))}
      </ul>
    );
}
export default TodoList;