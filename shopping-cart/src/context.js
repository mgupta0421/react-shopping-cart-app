import React, {useReducer, useContext, createContext} from "react";
import cartItems from './data';

// creation of context
const AppContext = createContext();

const initialState = {
    loading: false,
    cart: cartItems,
    total: 0,
    amount: 0
}
const AppProvider = ({children}) => {
    const[state, dispatch] = useReducer(useReducer, initialState);

    return (
        <AppContext.Provider value = {{...state}}> 
        {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider}