import React from "react";
import Swal from 'sweetalert2';
import LoginForm from "../../Components/LoginForm/LoginForm";
import './Login.css';
import { getUserByEmail } from "../../services/usersService";
import { useNavigate } from "react-router-dom";
import { mistakeMessage, tryLater } from "../../Components/Alerts/Alerts";

export const Login = () => {

    const navigate = useNavigate();

    return(
        <div className="Login-page">
            <h1>Aquí va la imagen del logo</h1>
            <LoginForm onLogin={async (email,password) => {
                var response = await getUserByEmail(email, password);

                if (response.status === 200)
                {
                    window.sessionStorage.setItem("user", JSON.stringify(response.data));
                    navigate("/main");
                }
                else if (response.status === 401)
                {
                    mistakeMessage();
                }
                else
                {
                    tryLater();
                }
            }}/>
        </div>
    );
};