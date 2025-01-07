/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [auth, setAuth] = useState(false);

    const login = () => {

    }

    const toggleAuth = () => {
        console.log("auth before : ", auth)
        if (!auth) {
            return axios.post("https://reqres.in/api/login", {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }).then((res) => {
                console.log(res.data)
                setAuth(true);
                return res.json
            })
        }

        setAuth(prevAuth => !prevAuth);
        console.log("auth after : ", auth)
    }

    return <AuthContext.Provider value={{ auth, login, toggleAuth }} >
        {children}
    </AuthContext.Provider >
}