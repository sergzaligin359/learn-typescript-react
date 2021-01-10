import React, {Dispatch, useContext} from 'react'
import { IActionTodo, ITodoProps } from '../../../state/todo/interfaces';
import { TodoContext } from '../../../state/todo/todoContext';

interface ITodoListProps {
    toggleTodo: (id: number) => void,
    removeTodo: (id: number) => void
}
// interface Mprops { todos: ITodoProps[] , dispatchTodo: Dispatch<IActionTodo> }
export const TodoList: React.FC<ITodoListProps> = ({toggleTodo, removeTodo}) => {
    // if(todos.length < 1){
    //     return <p>Нет задач...</p>
    // }
    const {todos}: any = useContext(TodoContext);
    
    console.log('TODOS CONTEXT', todos);
    return (
        <ul>
            {
                // todos.map(({ id, title, completed }) => {
                //     const classes = ['todo']
                //     if(completed){
                //         classes.push('completed')
                //     }
                //     return (
                //             <li 
                //                 onChange={ () => toggleTodo(id) }
                //                 className={ classes.join(' ') } 
                //                 key={id}
                //             >
                //                 <label>
                //                     <input type="checkbox" defaultChecked={completed} />
                //                     <span>{ title }</span>
                //                     <i 
                //                         onClick={ () => removeTodo(id) }
                //                         className="material-icons red-text"
                //                     >delete</i>
                //                 </label>
                //             </li>
                //         )
                //     })
            }

        </ul>
    )
}
