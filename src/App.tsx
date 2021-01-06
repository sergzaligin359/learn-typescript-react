import './App.css';
import React, { useState } from 'react';
import { NavBar } from './components/NavBar';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState([])
  console.log('Todos', todos)
  const addTodoHandle = (title: string): void => {
    console.log('Add new todo', title)
  }
  return (
    <>
      <NavBar />
      <div className="container">
        <TodoForm addTodo={addTodoHandle} />
        <TodoList todos={ ['item'] } />
      </div>
    </>
  );
}

export default App;
