import React, { useState, FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'


interface IParams {
    id: string;
    
 }
 
 interface Props extends RouteComponentProps<IParams> {
    isOpen: boolean;
 }

export const UpdateUser: FC<Props> = (props) => {
    const currentUserId = props.match.params.id;

    const [user, setUser] = useState(() => {
        const saved = JSON.parse(localStorage.getItem('users') || '[]');
        console.log('saved', saved)
        return saved.filter((user:  any) => user.id === currentUserId);
    })
    console.log('Users props.match.params.id', props.match.params.id)
    console.log('Users props.match.params.id', user)
    // useEffect(()=> {
    //     console.log('Users', user)
    // }, [user])
  
    // useEffect(()=> {
    //   localStorage.setItem('users', JSON.stringify(users))
    // }, [users])

    return (
        <div>
            
        </div>
    )
}
