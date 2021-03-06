import {FC, useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import { IArticleProps } from './articles/interfaces/IArticleProps';

export const Home: FC = () => {

    const [article, setArticle] = useState<IArticleProps>()

    useEffect(() => {
        const saved = localStorage.getItem('articles') || '[]'
        setArticle(JSON.parse(saved)[0])
    },[]);

    // console.log('article', article)

    return (
        <div>
            <h1>Главная страница</h1>
            <ul>
                <li><NavLink to="/my-current-dnd-tree">My current dnd tree</NavLink></li>
                <li><NavLink to="/b-dnd-tree">B dnd tree</NavLink></li>
                <li><NavLink to="/react-sortable-tree">React-sortable-tree</NavLink></li>
                <li><NavLink to="/dnd2tree">Dnd2tree</NavLink></li>
                <li><NavLink to="/global-feed">Global Feed</NavLink></li>
                <li><NavLink to="/memory-game">Memory Game</NavLink></li>
                <li><NavLink to="/select-tree">select-tree</NavLink></li>
                <li><NavLink to="/table-field-editable-input">table-field-editable-input</NavLink></li>
                <li><NavLink to="/table-field-editable">table-field-editable</NavLink></li>
                <li><NavLink to="/candidate-card/1">Карточка кандидата</NavLink></li>
                <li><NavLink to="/article/new">Страница создать статью</NavLink></li>
                <li><NavLink to={`/article/update/${article?.id}`}>Страница обновить статью по id - {article?.title}</NavLink></li>
                <li><NavLink to="/create-user">Страница создать юзера</NavLink></li>
                <li><NavLink to="/update-user/893524324881.337">Страница обновить юзера по id</NavLink></li>
                <li><NavLink to="/todo">Страница задач</NavLink></li>
                <li><NavLink to="/about">Страница о нас</NavLink></li>
                <li><NavLink to="/redux-ts-omit-hoc">Страница TypeScript / Omit / HOC</NavLink></li>
                <li><NavLink to="/todo">Страница задач</NavLink></li>
                <li><NavLink to="/count">Страница c Counter</NavLink></li>
                <li><NavLink to="/set-data">Страница генерации данных</NavLink></li>
                <li><NavLink to="/tasks">Страница TASKS</NavLink></li>
            </ul>
        </div>
    )
}
