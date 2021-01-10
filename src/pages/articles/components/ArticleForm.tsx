import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react"
import { IArticleProps } from './../interfaces/IArticleProps';

type ArticleFormProps = {
    initialValues: IArticleProps
    onSubmit: (article: IArticleProps) => void
}

export const ArticleForm: FC<ArticleFormProps> = ({ onSubmit, initialValues }) => {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [text, setText] = useState('');
    const [tags, setTags] = useState<string[]>([]);

    useEffect(() => {
        if(!initialValues) return
        setId(initialValues.id);
        setTitle(initialValues.title);
        setDesc(initialValues.desc);
        setText(initialValues.text);
        setTags(initialValues.tags);
    }, [initialValues])

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const id = (Date.now() * Math.random()).toString();

        onSubmit({
            id, title, desc, text, tags
        });
        console.log('Fields', id, title, desc, text, tags);
    }

    const handleTags = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.currentTarget.value;
        console.log(target);
        setTags([...target.split(' ')]);
        console.log(tags);
    }

    return (
        <div className="row">
            <form className="col s12" onSubmit={handleSubmit}>
                <div className="input-field col s12">
                    <input 
                        value={title}
                        onChange={e => setTitle(e?.target.value)}
                        id="title" 
                        type="text"
                        placeholder="Заголовок"
                    />
                </div>
                
                <div className="input-field col s12">
                    <input 
                        value={desc}
                        onChange={e => setDesc(e?.target.value)}
                        id="desc" 
                        type="text"
                        placeholder="Описание"
                    />
                </div>

                <div className="input-field col s12">
                    <input 
                        value={text}
                        onChange={e => setText(e?.target.value)}
                        id="text" 
                        type="text"
                        placeholder="Контент"
                    />
                </div>

                <div className="input-field col s12">
                    <input 
                        value={tags?.join(',')}
                        onChange={handleTags}
                        id="tags" 
                        type="text"
                        placeholder="Тэги"
                    />
                </div>

                <button className="btn waves-effect waves-light" type="submit" >Создать статью
                    <i className="material-icons right">send</i>
                </button>
            </form>
        </div>
    )
}
