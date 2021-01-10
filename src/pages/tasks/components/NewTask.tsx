import { useContext } from "react";
import { ActionType } from "../../../types/stateType";
import { TaskName } from "../../../types/taskType";
import { ContextApp } from "../Tasks";



export const NewTask: React.FC = () => {
    // Получаем state и dispatch-метод
    const {state, changeState} = useContext(ContextApp);

    // Oтправляем два действия редьюсеру todoReducer - добавление задачи и изменение инпута. 
    // После их успешной обработки переменная state обновится. Для уточнения интерфейса передаваемого события можно воспользоваться расширенными React-интерфейсами
    const addTask = (event: React.FormEvent<HTMLFormElement>, task: TaskName) => {
        event.preventDefault();
        changeState?.({type: ActionType.Add, payload: task})
        changeState?.({type: ActionType.Change, payload: ''})
    }

    // Аналогично - отправим изменение значения в инпуте
    const changeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeState?.({type: ActionType.Change, payload: event.target.value})
    }

    return (
        <>
            <form onSubmit={(event) => addTask(event, state?.newTask as string)}>
                <input type='text' onChange={(event)=>changeTask(event)} value={state?.newTask}/>
                <button type="submit">Add a task</button>
            </form>
        </>
    )
};

