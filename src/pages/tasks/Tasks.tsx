
import { createContext, Reducer, useReducer } from 'react';
import { todoReducer } from '../../reducers/todoReducer';

import { Action, ContextState, State } from '../../types/stateType';

import { NewTask } from './components/NewTask'
import { TasksList } from './components/TasksList'

// Начальные значения стейта
export const initialState: State = {
    newTask: '',
    tasks: []
}

// <Partial> позволяет создать контекст без дефолтных значений
export const ContextApp = createContext<Partial<ContextState>>({});

export const Tasks = () => {

    // Используем созданный todoReducer, передав его аргументом в useReduser. 
    // Изначально в стейт попадёт initialState, и далее при диспатче (changeState) будет обновляться.
    const [state, changeState] = useReducer<Reducer<State, Action>>(todoReducer, initialState);

    const ContextState: ContextState = {
        state,
        changeState
    };

    // Передаём в контекст результаты работы useReducer - стейт и метод его изменения
    return (
        <>
            <ContextApp.Provider value={ContextState}>
                <NewTask />
                <TasksList />
            </ContextApp.Provider>
        </>
    )
}
