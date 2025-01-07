import { useContext } from "react";
import { cartContext } from "../Contexts/CartContext";

const Card = () => {
    const { handleChange } = useContext(cartContext);
    return (
        <div style={{
            height: "100px",
            width: "100px",
            padding: "10px",
            background: "teal"
        }}><button onClick={() => { handleChange(1) }}>Add to cart</button></div>
    )
}

export default Card;
