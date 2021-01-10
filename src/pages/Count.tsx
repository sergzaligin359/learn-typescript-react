import { FC, MouseEvent, useReducer } from 'react'

type countStateProps = {
    count: number
}

type actionCountStateProps = {
    payload?: any
    type: string
}

const reducer = (state: countStateProps, {type, payload}: actionCountStateProps) => {
    switch (type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        case 'RESET':
            return {
                count: payload
            }
        default:
            return state;
    }
    
};

export const Count: FC = () => {

    const initialState = { count: 0 };

    const [state, dispatch] = useReducer(reducer, initialState);

    const increment = (event: MouseEvent<HTMLButtonElement>) => {
        dispatch({ type: 'INCREMENT' });
    };

    const decrement = (event: MouseEvent<HTMLButtonElement>) => {
        dispatch({ type: 'DECREMENT' });
    };

    const reset = (event: MouseEvent<HTMLButtonElement>) => {
        dispatch({ type: 'RESET', payload: 0 });
    };

    return (
        <div className="mt-40">
            <span>{ state.count }</span>
            <div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <button onClick={reset}>reset</button>
            </div>
        </div>
    )
}
