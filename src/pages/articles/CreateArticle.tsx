import { FC, useEffect, useState } from 'react'
import { ArticleForm } from './components/ArticleForm';
import { IInitialValues } from './interfaces/IInitialValues';


export const CreateArticle: FC = () => {

    const [articles, setArticles] = useState<IInitialValues[]>(() => {
        const saved = localStorage.getItem('articles') || '[]';
        return JSON.parse(saved);
    });

    console.log('articles', articles);

    const initialValues: IInitialValues = {
        title: '',
        desc: '',
        text: '',
        tags: ''
    }

    useEffect(() => {
        const savedData = JSON.stringify(articles);
        localStorage.setItem('articles', savedData);
    }, [articles]);

    const onSubmit = ({title, desc, text, tags}: IInitialValues) => {
        const id = (Date.now() * Math.random()).toString();
        setArticles(prev => {
            return [...prev, {
                id, title, desc, text, tags
            }]
        })
    }

    return (
        <div>
            <ArticleForm onSubmit={onSubmit} initialValues={initialValues} />
        </div>
    )

}
