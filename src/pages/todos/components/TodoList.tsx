
export const TodoList: React.FC = () => {
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
