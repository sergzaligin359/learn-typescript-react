import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
interface IUserUpdateProps extends RouteComponentProps{
    id: string
}
export const UpdateUser: any = (props: any) => {
    const [user, setUser] = useState(() => {
        const saved = JSON.parse(localStorage.getItem('users') || '[]');
        console.log('saved', saved)
        return saved.filter((user:  any) => +user.id === +props.match.params.id);
    })
    console.log('Users props.match.params.id', props.match.params.id)
    console.log('Users props.match.params.id', user)
    useEffect(()=> {
        console.log('Users', user)
    }, [user])
  
    // useEffect(()=> {
    //   localStorage.setItem('users', JSON.stringify(users))
    // }, [users])

    return (
        <div>
            
        </div>
    )
}
