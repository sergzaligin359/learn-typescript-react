import { FC, FormEvent, useEffect, useState } from "react"
import { IInitialValues } from "../interfaces/IInitialValues";



type ArticleFormProps = {
    initialValues: IInitialValues
    onSubmit: (article: IInitialValues) => void
}

export const ArticleForm: FC<ArticleFormProps> = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [text, setText] = useState('');
    const [tags, setTags] = useState('');

    useEffect(() => {
        if(!initialValues) return
        setTitle(initialValues.title);
        setDesc(initialValues.desc);
        setText(initialValues.text);
        setTags(initialValues.tags);
    }, [initialValues])

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit({
            title, desc, text, tags 
        });
        console.log('Fields', title, desc, text, tags);
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
                        value={tags}
                        onChange={e => setTags(e?.target.value)}
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
