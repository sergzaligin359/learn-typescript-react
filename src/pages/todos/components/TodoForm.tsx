import { useContext } from "react";
import { ContextTodo } from "../../../state/todo/types/context";
import { TodoTitle } from "../../../state/todo/types/todo";
import { ActionType } from "../../../types/stateType";

export const TodoForm: React.FC = () => {
    
    const {state, changeState} = useContext(ContextTodo);

    const addTodo = (event: React.FormEvent<HTMLFormElement>, todo: TodoTitle) => {
        event.preventDefault();
        changeState?.({type: ActionType.Add, payload: todo})
    }

    const changeTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeState?.({type: ActionType.Change, payload: event.target.value})
    }

    return (
        <>
            <form onSubmit={(event) => addTodo(event, state?.newTodo as string)}>
                <input type='text' onChange={(event)=>changeTodo(event)} value={state?.newTodo}/>
                <button type="submit">Add a todo</button>
            </form>
        </>
    )
};