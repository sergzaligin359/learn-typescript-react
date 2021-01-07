import React from 'react'
import { NavLink } from 'react-router-dom'

export const Home: React.FC = () => {
    return (
        <div>
            <h1>Главная страница</h1>
            <ul>
                <li><NavLink to="/update-user/503145113156.04486">Страница обновить юзера по id</NavLink></li>
                <li><NavLink to="/todo">Страница задач</NavLink></li>
                <li><NavLink to="/about">Страница о нас</NavLink></li>
                <li><NavLink to="/redux-ts-omit-hoc">Страница TypeScript / Omit / HOC</NavLink></li>
                <li><NavLink to="/todo">Страница задач</NavLink></li>
                <li><NavLink to="/set-data">Страница генерации данных</NavLink></li>
            </ul>
        </div>
    )
}
