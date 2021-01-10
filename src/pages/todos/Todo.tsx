import React, { Dispatch, useEffect, useReducer } from 'react'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { TodoContext } from './../../state/todo/todoContext';
import { todoReducer } from './../../state/todo/todoReducer';
import { IActionTodo, ITodoProps } from '../../state/todo/interfaces';

// interface Mprops { todos: ITodoProps[] , dispatchTodo: Dispatch<IActionTodo> }

export const Todo: React.FC = () => {
    // const initialState: ITodoProps[] = [];
    const [todos, dispatchTodo] = useReducer(todoReducer, []);
    console.log('Todos', todos)
  
    useEffect(()=> {
      // const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
      // setTodos(saved);
    }, [])
  
    // useEffect(()=> {
    //   localStorage.setItem('todos', JSON.stringify(todos))
    // }, [todos])

    const addTodoHandle = (title: string): void => {
        const newTodo: ITodoProps = {
          title,
          id: Date.now(),
          completed: false
        }
        console.log('add todo', newTodo)
        dispatchTodo({
          type: 'ADD_TODO',
          payload: newTodo
        })
        // setTodos(prev => [...prev, newTodo])
      }
      const toggleTodoHandle = (id: number): void => {
        // setTodos(prev => prev.map((item) => {
        //   if(item.id === id){
        //     item.completed = !item.completed
        //   }
        //   return item
        // }))
      }
      const removeTodoHandle = (id: number): void => {
        // const isRemove = window.confirm(`Are you shoure delete element with id ${id}?`)
        // if(isRemove){
        //   setTodos(prev => prev.filter((item) => item.id !== id))
        // }
      }

    const obj: any = { todos, dispatchTodo };

    return (
      <TodoContext.Provider value={obj}>
        <div>
            <h1>Todo page</h1>
            <TodoForm addTodo={addTodoHandle} />
            <TodoList 
                toggleTodo={toggleTodoHandle} 
                removeTodo={removeTodoHandle} 
            />
        </div>
      </TodoContext.Provider>
    )
}
