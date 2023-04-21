import React, { useState } from "react";
import './LoginForm.css';


export default function LoginForm(){
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange =(event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange =(event) => {
        setPassword(event.target.value);
    };

    return(
        <div className="login-form d-flex justify-content-center">
            <form className="col-lg-5 col-md-6 col-sm-8 col-11 d-flex flex-column justify-content-center">
                <h1 className="h1-form">¡Bienvenido!</h1>
                <label>
                    Nombre de usuario
                    <input className="col-12" type="text" placeholder="Escriba su nombre de usuario" value={username} onChange={handleUsernameChange}></input>
                </label>

                <label>
                    Contraseña
                    <input className="col-12" type="password" placeholder="Escriba su contraseña" value={password} onChange={handlePasswordChange}></input>
                </label>
                
                <div className="d-flex flex-row justify-content-center">
                    <button className="btn-form col-xl-6 col-lg-9 col-md-10 col-11" type="submit">
                        Ingresar
                    </button>
                </div>
                
                
            </form>
        </div>
    );
};