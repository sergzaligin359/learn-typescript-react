import React, { useState } from 'react'

interface ITodoFormProps {
    addTodo: (title: string) => void
}

export const TodoForm: React.FC<ITodoFormProps> = ({ addTodo }) => {
    const [title, setTitle] = useState('')
    const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const keyPressHandle = (e: React.KeyboardEvent) => {
        if(e.key === 'Enter'){
            addTodo(title)
            setTitle('')
        }
    }
    return (
        <div className="input-field mt-40">
            <input 
                onChange={ changeHandle }
                onKeyPress={ keyPressHandle }
                value={title}
                type="text" 
                id="title" 
                placeholder="Введите название дела" 
            />
            <label htmlFor="title" className="active">
                Введите название дела
            </label>
        </div>
    )
}