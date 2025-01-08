/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const cartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState(0);
    const handleChange = (inc) => {
        setCart(cart + inc);
    }
    return (
        <cartContext.Provider value={{ cart, handleChange }}>
            {children}
        </cartContext.Provider>
    )
}

