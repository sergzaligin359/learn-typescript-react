import { RouteComponentProps } from 'react-router-dom'
import { ArticleForm } from './components/ArticleForm';
import { useEffect, useState } from 'react';
import { IArticleProps } from './interfaces/IArticleProps';

interface IParams {
    id: string;
}
 
interface Props extends RouteComponentProps<IParams> {
    isOpen: boolean;
}

export const UpdateArticle = ({match}: Props) => {

    const currentArticleId = match.params.id;

    const [article, setArticle] = useState<IArticleProps>()
    

    useEffect(() => {
        const saved = localStorage.getItem('articles') || '[]'
        setArticle(JSON.parse(saved).filter((article: IArticleProps) => article.id === currentArticleId)[0])
    }, []);

    console.log('Article', article)
    
    const onSubmit = ({id, title, desc, text, tags}: IArticleProps) => {
        console.log('Updatesubmit', id, title, desc, text, tags)
    }

    return (
        <div>
            { article && (<ArticleForm onSubmit={ onSubmit } initialValues={article} />) }
        </div>
    )
}
