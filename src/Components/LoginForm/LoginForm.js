import React, { useState } from "react";
import './LoginForm.css';


export default function LoginForm(props){
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = (e) => {
      e.preventDefault();
      setShowPassword(!showPassword);
    };
    const handleEmailChange =(event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange =(event) => {
        setPassword(event.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        props.onLogin(email,password);
    }

    return(
        <div className="login-form d-flex justify-content-center">
            <form onSubmit={handleFormSubmit} className="col-lg-5 col-md-6 col-sm-8 col-11 d-flex flex-column justify-content-center">
                <h1 className="h1-form">¡Bienvenido!</h1>
                <label>
                    Correo electrónico
                    <input className="col-12" type="text" placeholder="Escriba su correo electrónico" value={email} onChange={handleEmailChange}></input>
                </label>

                <label className="col-11">
                    Contraseña
                    <div className="d-flex flex-row">
                        <input 
                            className="col-12" 
                            placeholder="Escriba su contraseña" 
                            value={password} 
                            onChange={handlePasswordChange}
                            type={showPassword ? 'text' : 'password'}/>
                        <button onClick={toggleShowPassword}>
                            {
                            showPassword ? (
                                <svg id="eye" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                </svg>
                            ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
                            </svg>
                            )
                            }
                        </button>
                    </div>
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