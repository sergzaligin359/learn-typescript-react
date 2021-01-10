import React, { Reducer, useReducer } from 'react'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { ContextTodo, ContextState } from '../../state/todo/types/context';
import { State } from '../../state/todo/types/state';
import { Action } from '../../state/todo/types/actions';
import { todoReducer } from '../../state/todo/todoReducer';

// Начальные значения стейта
export const initialState: State = {
  newTodo: '',
  todos: []
}

export const Todo: React.FC = () => {

  const [state, changeState] = useReducer<Reducer<State, Action>>(todoReducer, initialState);

  const ContextState: ContextState = {
      state,
      changeState
  };
    
  console.log('Todos', state)
    
  return (
    <ContextTodo.Provider value={ContextState}>
      <div>
          <h1>Todo page</h1>
          <TodoForm />
          <TodoList />
      </div>
    </ContextTodo.Provider>
  )
}
