import React from "react";
import TodoListItem from './TodoListItem'

// const todoList = [
//     { id: 1, title: 'Finish React assignment' },
//     { id: 2, title: 'Read book' },
//     { id: 3, title: 'Go to slip' },
//   ];

function TodoList({todoList}) {
    return (
      <ul>
        {todoList.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    );
}
export default TodoList;