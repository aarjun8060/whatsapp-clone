import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";

export const StateContext = createContext()

export const StateProvider = ({initialState,reducer,children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)} >
        {children}
    </StateContext.Provider>
)

export const useStateProvider = () => useContext(StateContext)