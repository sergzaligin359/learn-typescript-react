import React from 'react'
import { NavLink } from 'react-router-dom'

export const Home: React.FC = () => {
    return (
        <div>
            <h1>Главная страница</h1>
            <ul>
                <li><NavLink to="/article/new">Страница создать статью</NavLink></li>
                <li><NavLink to="/article/update/893524324881.337">Страница обновить статью по id</NavLink></li>
                <li><NavLink to="/create-user">Страница создать юзера</NavLink></li>
                <li><NavLink to="/update-user/893524324881.337">Страница обновить юзера по id</NavLink></li>
                <li><NavLink to="/todo">Страница задач</NavLink></li>
                <li><NavLink to="/about">Страница о нас</NavLink></li>
                <li><NavLink to="/redux-ts-omit-hoc">Страница TypeScript / Omit / HOC</NavLink></li>
                <li><NavLink to="/todo">Страница задач</NavLink></li>
                <li><NavLink to="/set-data">Страница генерации данных</NavLink></li>
            </ul>
        </div>
    )
}
