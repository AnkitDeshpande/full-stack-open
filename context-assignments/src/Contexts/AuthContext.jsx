/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    {/*provider*/ }

    const [auth, setAuth] = useState(false);

    const toggleAuth = () => {
        console.log("auth before : ", auth)
        if (!auth) {
            return axios.post("https://reqres.in/api/login", {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }).then((res) => {
                console.log(res.data)
                setAuth(true);
                localStorage.setItem("Token", JSON.stringify(res.data.token));
                return res.json
            })
        }

        localStorage.clear();
        setAuth(prevAuth => !prevAuth);
        console.log("auth after : ", auth)
    }

    return <AuthContext.Provider value={{ auth, toggleAuth }} >
        {children}
    </AuthContext.Provider >
}