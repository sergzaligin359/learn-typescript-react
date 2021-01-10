import { ITodoProps, IActionTodo } from "./interfaces";

export const todoReducer = (state: ITodoProps[], { type, payload }: IActionTodo) => {
    switch (type) {
        case 'ADD_TODO':
                return [
                    ...state,
                    payload
                ]
            case 'DELETED_TODO':
                return []
        default:
            return state;
    }
}