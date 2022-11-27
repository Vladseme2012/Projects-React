import { useState } from 'react';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import Button from './components/UI/Button';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodosHandler = (text) => {
    return setTodos([...todos, text]);
  };
  const deleteTodosHandler = (index) => {
    return setTodos(todos.filter((_, idx) => idx !== index));
  };
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodosHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodosHandler} />
    </div>
  );
}

export default App;
