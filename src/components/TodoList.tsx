import React from 'react'
import { ITodo } from '../interfaces/todo'
interface ITodoListProps {
    todos: ITodo[],
    toggleTodo: (id: number) => void,
    removeTodo: (id: number) => void
}
export const TodoList: React.FC<ITodoListProps> = ({todos, toggleTodo, removeTodo}) => {
    if(todos.length < 1){
        return <p>Нет задач...</p>
    }
    return (
        <ul>
            {
                todos.map(({ id, title, completed }) => {
                    const classes = ['todo']
                    if(completed){
                        classes.push('completed')
                    }
                    return (
                            <li 
                                onChange={ () => toggleTodo(id) }
                                className={ classes.join(' ') } 
                                key={id}
                            >
                                <label>
                                    <input type="checkbox" defaultChecked={completed} />
                                    <span>{ title }</span>
                                    <i 
                                        onClick={ () => removeTodo(id) }
                                        className="material-icons red-text"
                                    >delete</i>
                                </label>
                            </li>
                        )
                    })
            }

        </ul>
    )
}
