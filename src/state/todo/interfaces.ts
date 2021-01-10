export interface IActionTodo {
    payload?: any
    readonly type: string
}

export type ITodoProps = {
    title: string
    id: number
    completed: boolean
}