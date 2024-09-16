import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState(["First task", "Second task", "Third task"]);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;



