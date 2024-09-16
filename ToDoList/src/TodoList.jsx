
import { useState } from 'react';
import './TodoList.css'


function TodoList() {
  const [todos, setTodos] = useState([
    { text: "First task", isCompleted: false },
    { text: "Second task", isCompleted: false },
    { text: "Third task", isCompleted: false }
  ]);

  const [newTodo, setNewTodo] = useState("");

  // Add a new todo
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, isCompleted: false }]);
      setNewTodo("");
    }
  };

  // Toggle task completion
  const toggleCompletion = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted;
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1 className="header">Todo List</h1>

      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
          className="input"
        />
        <button onClick={addTodo} className="add-button">Add Todo</button>
      </div>

      {/* This is the section where the bullet points were an issue */}
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => toggleCompletion(index)}
              className="checkbox"
            />
            <span className={`todo-text ${todo.isCompleted ? 'completed' : ''}`}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
