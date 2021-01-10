import { Todo } from "./todo";

export enum ActionType {
    Add = 'Add',
    Change = 'Change',
    Remove = 'Remove',
    Toggle = 'Toggle'
}


type ActionStringPayload = {
    type: ActionType.Add | ActionType.Change,
    payload: string
}

type ActionObjectPayload = {
    type: ActionType.Toggle | ActionType.Remove,
    payload: Todo
}

export type Action = ActionStringPayload | ActionObjectPayload;