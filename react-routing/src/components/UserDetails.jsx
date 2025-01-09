import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const UserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const { isAuth } = useContext(AuthContext);

    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${id}`)
            .then(({ data }) => setUser(data.data));
    }, [id]);

    if (!isAuth) {
        return <Navigate to={"/login"} replace={false} />
    }

    return (
        <>
            <img src={user.avatar} />
            <div><br />Name : {user.first_name} {user.last_name} </div>
        </>
    )
}
