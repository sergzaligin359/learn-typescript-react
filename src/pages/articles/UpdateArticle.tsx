import { RouteComponentProps } from 'react-router-dom'

interface IParams {
    id: string;
}
 
interface Props extends RouteComponentProps<IParams> {
    isOpen: boolean;
}

export const UpdateArticle = (props: Props) => {
    return (
        <div>
            
        </div>
    )
}
