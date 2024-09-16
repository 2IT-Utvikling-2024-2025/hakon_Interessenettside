import React, { useState } from 'react';
import './TodoList.css'; 

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleAdd = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(), // Use timestamp as a unique id
          text: newTodo,
          completed: false
        }
      ]);
      setNewTodo(''); // Clear input field after adding
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const handleSaveEdit = () => {
    setTodos(todos.map(todo =>
      todo.id === editingId ? { ...todo, text: editText } : todo
    ));
    setEditingId(null);
    setEditText('');
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="container">
      <div className="header">My To-do List</div>
      <div className="input-container">
        <input
          className="input"
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="add-button" onClick={handleAdd}>Add Task</button>
      </div>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              className="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
            />
            {editingId === todo.id ? (
              <div className="edit-container">
                <input
                  type="text"
                  className="input"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button className="add-button" onClick={handleSaveEdit}>Save</button>
              </div>
            ) : (
              <span className="todo-text">{todo.text}</span>
            )}
            <div>
              <button className="edit-button" onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
              <button className="delete-button" onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;


