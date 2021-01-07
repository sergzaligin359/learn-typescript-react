import React, { useState, useEffect } from 'react'

export const SetData = () => {
    const [users, ] = useState([
        {
            id: Date.now() * Math.random(),
            name: 'Sergey',
            surname: 'Zalygin',
            depId: 1
        },
        {
            id: Date.now() * Math.random(),
            name: 'Ivan',
            surname: 'Zalygin',
            depId: 1
        },
        {
            id: Date.now() * Math.random(),
            name: 'Viktor',
            surname: 'Zalygin',
            depId: 1
        },
        {
            id: Date.now() * Math.random(),
            name: 'Ludmila',
            surname: 'Zalygina',
            depId: 2
        },
    ])

    const [deps, ] = useState([
        {
            id: Date.now() * Math.random(),
            title: 'Комната',
            depId: 1
        },
        {
            id: Date.now() * Math.random(),
            title: 'Кухня',
            depId: 2
        },
    ])
    useEffect(()=> {
        localStorage.setItem('users', JSON.stringify(users))
        localStorage.setItem('deps', JSON.stringify(deps))
      }, [])
    return (
        <div>
            <h1>Gen data страница</h1>
        </div>
    )
}
