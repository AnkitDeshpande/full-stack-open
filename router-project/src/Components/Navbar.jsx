import { Link } from "react-router-dom"

export const Navbar = () => {
    const nav = [
        { id: 1, title: "Electronics", path: "/electronics" },
        { id: 2, title: "Health & Beauty", path: "/health" },
        { id: 3, title: "Home & Kitchen", path: "kitchen" },
        { id: 4, title: "Clothing & Apparel", path: "clothings" },
        { id: 5, title: "Sports & Outdoors", path: "sports" }
    ]

    return (
        <div style={{
            border: "1px solid red",
            display: "flex",
            flexDirection: "row",
            alignItems: "end",
            justifyContent: "flex-end"
        }}>
            {nav.map((el) => <Link key={el.id} to={el.path}><p style={{
                margin: "10px",
            }}>{el.title}</p></Link>)
            }
        </div >
    )
}
