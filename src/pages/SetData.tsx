import React, { useState, useEffect } from 'react'

export const SetData = () => {
    const [users, ] = useState([
        {
            id: (Date.now() * Math.random()).toString(),
            name: 'Sergey',
            surname: 'Zalygin',
            depId: 1
        },
        {
            id: (Date.now() * Math.random()).toString(),
            name: 'Ivan',
            surname: 'Zalygin',
            depId: 1
        },
        {
            id: (Date.now() * Math.random()).toString(),
            name: 'Viktor',
            surname: 'Zalygin',
            depId: 1
        },
        {
            id: (Date.now() * Math.random()).toString(),
            name: 'Ludmila',
            surname: 'Zalygina',
            depId: 2
        },
    ])

    const [deps, ] = useState([
        {
            id: (Date.now() * Math.random()).toString(),
            title: 'Комната',
            depId: 1
        },
        {
            id: (Date.now() * Math.random()).toString(),
            title: 'Кухня',
            depId: 2
        },
    ])
    const [articles, ] = useState([
        {
            id: (Date.now() * Math.random()).toString(),
            title: 'Тайтл для статьи 1',
            desc: 'Описание для статьи 1',
            text: 'Текст контент для статьи 1',
            tags: []
        },
        {
            id: (Date.now() * Math.random()).toString(),
            title: 'Тайтл для статьи 2',
            desc: 'Описание для статьи 2',
            text: 'Текст контент для статьи 2',
            tags: []
        },
        {
            id: (Date.now() * Math.random()).toString(),
            title: 'Тайтл для статьи 3',
            desc: 'Описание для статьи 3',
            text: 'Текст контент для статьи 3',
            tags: []
        },
    ])
    useEffect(()=> {
        localStorage.setItem('users', JSON.stringify(users))
        localStorage.setItem('deps', JSON.stringify(deps))
        localStorage.setItem('articles', JSON.stringify(articles))
      }, [])
    return (
        <div>
            <h1>Gen data страница</h1>
        </div>
    )
}
