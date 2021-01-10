
import { Reducer } from 'react';
import { Action, ActionType } from './types/actions';
import { State } from './types/state';

export const todoReducer: Reducer<State, Action> = (state, action): State => {
    switch (action.type) {
        case ActionType.Add:
                return {
                    ...state, 
                    todos: [
                        ...state.todos, 
                        {
                            title: action.payload,
                            completed: false
                        }
                    ]
                }
        case ActionType.Change: {
            return {...state, newTodo: action.payload}
        }
        default:
            return state;
    }
}