import { useContext } from "react";
import { ContextTodo } from "../../../state/todo/types/context";

export const TodoList: React.FC = () => {

    const {state, } = useContext(ContextTodo);

    return (
        <ul>
            {
                state?.todos.map(({ title, completed }) => {
                    const classes = ['todo']
                    if(completed){
                        classes.push('completed')
                    }
                    return (
                            <li 
                                className={ classes.join(' ') } 
                                key={title}
                            >
                                <label>
                                    <input type="checkbox" defaultChecked={completed} />
                                    <span>{ title }</span>
                                    <i 
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
