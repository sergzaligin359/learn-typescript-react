import { FC, useEffect, useState } from 'react'
import { ArticleForm } from './components/ArticleForm';
import { IArticleProps } from './interfaces/IArticleProps';



export const CreateArticle: FC = () => {

    const [articles, setArticles] = useState<IArticleProps[]>(() => {
        const saved = localStorage.getItem('articles') || '[]';
        return JSON.parse(saved);
    });

    console.log('articles', articles);

    const initialValues: IArticleProps = {
        id: '',
        title: '',
        desc: '',
        text: '',
        tags: []
    }

    useEffect(() => {
        const savedData = JSON.stringify(articles);
        localStorage.setItem('articles', savedData);
    }, [articles]);

    const onSubmit = ({id, title, desc, text, tags}: IArticleProps) => {
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
