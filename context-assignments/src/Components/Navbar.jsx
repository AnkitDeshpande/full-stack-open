import { useContext } from "react"
import { AuthContext } from "../Contexts/AuthContext"

const Navbar = () => {
    const { auth, toggleAuth } = useContext(AuthContext);
    return (
        <div>
            <button onClick={() => toggleAuth()}>{auth ? "Logout" : "login"}</button>
        </div>
    )
}

export default Navbar