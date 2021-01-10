import { createContext, Dispatch } from "react";
import { Action } from "./actions";
import { State } from "./state";

export type ContextState = {
    state: State;
    changeState: Dispatch<Action>
}

// <Partial> позволяет создать контекст без дефолтных значений
export const ContextTodo = createContext<Partial<ContextState>>({});