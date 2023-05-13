import React from "react";
import LoginForm from "../../Components/LoginForm/LoginForm";
import './Login.css';
import { getUserByEmail } from "../../services/usersService";

export const Login = () => {
    return(
        <div className="Login-page">
            <h1>Aquí va la imagen del logo</h1>
            <LoginForm onLogin={async (email,password) => {
                var userdata = await getUserByEmail(email);
                console.log(userdata.email + "kjdaf " + userdata.password);
            }}/>
        </div>
    );
};