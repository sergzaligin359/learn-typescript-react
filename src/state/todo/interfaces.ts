export interface IActionTodo {
    payload?: any
    type: string
}

export type ITodoProps = {
    title: string
    id: number
    completed: boolean
}