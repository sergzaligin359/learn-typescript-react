import React, { useState, useEffect } from 'react'
import { TodoForm } from '../components/TodoForm'
import { TodoList } from '../components/TodoList'
import { ITodo } from '../interfaces/todo'

export const Todo: React.FC = () => {
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
        <div>
            <h1>Todo page</h1>
            <TodoForm addTodo={addTodoHandle} />
            <TodoList 
                todos={ todos } 
                toggleTodo={toggleTodoHandle} 
                removeTodo={removeTodoHandle} 
            />
        </div>
    )
}
