import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://reqres.in/api/users")
            .then(res => {
                console.log(res);
                setUsers(res.data.data);
            })
    }, []);
    return (
        <div>
            {users.map((user) =>
                <p key={user.id}>
                    <Link to={`/users/${user.id}`}>{user.id}. {user.first_name} {user.first_name}
                    </Link>
                </p>)}
        </div>
    )
}

export default Users