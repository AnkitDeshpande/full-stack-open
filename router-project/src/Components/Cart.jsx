import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
    const { value } = useContext(CartContext);
    return (
        <div>Cart value : {value}</div>
    )
}

export default Cart