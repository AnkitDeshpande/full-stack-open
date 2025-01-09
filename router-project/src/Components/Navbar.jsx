import { Link } from "react-router-dom";
import basket from '../../basket.png';

export const Navbar = () => {
    const nav = [
        { id: 1, title: "Electronics", path: "/electronics" },
        { id: 2, title: "Health & Beauty", path: "/health" },
        { id: 3, title: "Home & Kitchen", path: "kitchen" },
        { id: 4, title: "Clothing & Apparel", path: "clothings" },
        { id: 5, title: "Sports & Outdoors", path: "sports" }
    ]

    return (
        <nav style={{
            border: "1px solid red",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "end",
            maxWidth: "100%",
            padding: "10px"
        }}>
            {nav.map((el) => (
                <Link key={el.id} to={el.path}>
                    <p style={{
                        margin: "10px",
                    }}>{el.title}</p>
                </Link>
            ))}
            <img
                src={basket}
                alt="Cart"
                style={{
                    width: '40px', // Set a fixed width for the basket container
                    height: '40px', // Set a fixed height for the basket container
                    border: '1px solid black',
                    textAlign: 'center',
                    maxHeight: '100%' // Ensure the image doesn’t overflow
                }}
            />
        </nav>
    );

}
