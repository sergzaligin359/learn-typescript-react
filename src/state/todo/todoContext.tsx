import { createContext } from 'react';
import { ITodoProps } from './interfaces';

export const TodoContext = createContext<ITodoProps[]>([]);

