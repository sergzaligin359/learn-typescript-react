import {Task, Tasks} from "./taskType";
import {Dispatch} from "react";

// В состоянии хранится записываемая в инпут новая задача, а также массив уже созданных задач
export type State = {
    newTask: string
    tasks: Tasks
}

// Все возможные варианты действий со стейтом
export enum ActionType {
    Add = 'Add',
    Change = 'Change',
    Remove = 'Remove',
    Toggle = 'Toggle'
}

// Для действий ADD и CHANGE доступна передача только строковых значений
type ActionStringPayload = {
    type: ActionType.Add | ActionType.Change,
    payload: string
}

// Для действий TOGGLE и REMOVE доступна передача только объекта типа Task
type ActionObjectPayload = {
    type: ActionType.Toggle | ActionType.Remove,
    payload: Task
}

// Объединяем предыдущие две группы для использования в редьюсере
export type Action = ActionStringPayload | ActionObjectPayload;

// Наш контекст состоит из стейта и функции-редьюсера, в которую будут передаваться Action. 
// Тип Dispatch импортируется из библиотеки react
export type ContextState = {
    state: State;
    changeState: Dispatch<Action>
}