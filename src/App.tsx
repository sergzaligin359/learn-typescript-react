import './App.css'
import React, { useState, useEffect } from 'react'
import { NavBar } from './components/NavBar'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { ITodo } from './interfaces/todo'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Todo } from './pages/Todo';
import { About } from './pages/About';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  console.log('Todos', todos)

  useEffect(()=> {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved);
  }, [])

  useEffect(()=> {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodoHandle = (title: string): void => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false
    }
    setTodos(prev => [...prev, newTodo])
  }
  const toggleTodoHandle = (id: number): void => {
    setTodos(prev => prev.map((item) => {
      if(item.id === id){
        item.completed = !item.completed
      }
      return item
    }))
  }
  const removeTodoHandle = (id: number): void => {
    const isRemove = window.confirm(`Are you shoure delete element with id ${id}?`)
    if(isRemove){
      setTodos(prev => prev.filter((item) => item.id !== id))
    }
  }
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Switch>
          <Route component={Todo} path="/todo" />
          <Route component={About} path="/about"/>
        </Switch>
        <TodoForm addTodo={addTodoHandle} />
        <TodoList 
          todos={ todos } 
          toggleTodo={toggleTodoHandle} 
          removeTodo={removeTodoHandle} 
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
