import { useContext } from "react";
import { cartContext } from "../Contexts/CartContext";

const Navbar = () => {
    const { cart } = useContext(cartContext);
    return (
        <div style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
            border: "1px solid red",
            padding: "10px"
        }}>Cart : {cart}</div>
    )
}

export default Navbar;