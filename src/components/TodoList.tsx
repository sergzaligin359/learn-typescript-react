import React from 'react'
interface ITodoListProps {
    todos: []
}
export const TodoList: React.FC<ITodoListProps> = ({ todos }) => {
    return (
        <ul>
            {
                todos.map(todo => <li>{ todo }</li>)
            }
        </ul>
    )
}
