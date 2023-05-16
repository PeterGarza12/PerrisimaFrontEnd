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
                var response = await getUserByEmail(email, password);

                if (response.status === 200)
                {
                    navigate("/main");
                }
                else if (response.status === 401)
                {
                    alert("Credenciales incorrectas");
                }
                else
                {
                    alert("Algo salió mal, vuelva a intentarlo más tarde");
                }
            }}/>
        </div>
    );
};