import React from "react";
import LoginForm from "../../Components/LoginForm/LoginForm";
import './Login.css';
import { getUserByEmail } from "../../services/usersService";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate();

    return(
        <div className="Login-page">
            <h1>Aquí va la imagen del logo</h1>
            <LoginForm onLogin={async (email,password) => {
                var userdata = await getUserByEmail(email);

                if (email == userdata.email && password == userdata.password){
                    navigate("/main");
                }
            }}/>
        </div>
    );
};