import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {

    const { handleAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const [obj, setObj] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(obj)
        axios.post("https://reqres.in/api/login", obj)
            .then()
            .then(({ data }) => {
                localStorage.setItem("token", JSON.stringify(data.token))
                handleAuth(true);
                navigate(-2);
            })
    }

    const handleOnChange = (event) => {
        event.preventDefault();
        const id = event.target.id;
        console.log(event.target.id)
        setObj({
            ...obj,
            [id]: event.target.value
        })
    }

    return (
        <div>
            <form action="submit">
                <input onChange={handleOnChange} type="text" id="email" placeholder="Enter email" />
                <input onChange={handleOnChange} type="text" id="password" placeholder="Enter password" />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Login