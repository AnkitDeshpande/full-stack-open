import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [value, setValue] = useState(0);
    const handleValue = (value) => {
        setValue(prev => prev + value);
    }

    return <CartContext.Provider value={{ value, handleValue }}>
        {children}
    </CartContext.Provider>
}