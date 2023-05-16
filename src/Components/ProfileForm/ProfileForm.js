import React, { useState } from "react";
import './ProfileForm.css'

export default function ProfileForm(){
    var user = JSON.parse(window.sessionStorage.getItem("user"));
    
    const [ActualPassword, setActualPassword] = useState("");
    const handleActualPasswordChange =(event) => {
        setActualPassword(event.target.value);
    };
    
    const [NewPassword, setNewPassword] = useState("");  
    const handleNewPasswordChange =(event) => {
        setNewPassword(event.target.value);
    };

    const [ConfirmPassword, setConfirmPassword] = useState("");  
    const handleConfirmPasswordChange =(event) => {
        setConfirmPassword(event.target.value);
    };

    const changePw = () => {

    }

    return(
        <div className="login-form d-flex justify-content-center">
            <form className="col-xl-7 col-lg-8 col-md-10 col-11 d-flex flex-column justify-content-between">
                <h1 className="h1-form">Información personal de la empleada</h1>
                
                <label>
                    Nombre completo
                    <input className="disabled col-12" type="text" disabled value={user.name}></input>
                </label>

                <label>
                    Nombre de usuario
                    <input className="disabled col-12" type="text" disabled value={user.user_name}></input>
                </label>

                <label>
                    Email
                    <input className="disabled col-12" type="email" value={user.email} disabled></input>
                </label>

                <label>
                    Teléfono
                    <input className="disabled col-12" type="number" value={user.phone_number} disabled></input>
                </label>

                <div id="passwords" className="d-none flex-column">
                    <label>
                        Contraseña actual
                        <input className="col-12" type="password" placeholder="Ingrese su contraseña actual" value={ActualPassword} onChange={handleActualPasswordChange}></input>
                    </label>

                    <label>
                        Contraseña nueva
                        <input className="col-12" type="password" placeholder="Ingrese la contraseña que desea" value={NewPassword} onChange={handleNewPasswordChange}></input>
                    </label>

                    <label>
                        Confirmar contraseña nueva
                        <input className="col-12" type="password" placeholder="Confirme su nueva contraseña" value={ConfirmPassword} onChange={handleConfirmPasswordChange}></input>
                    </label>
                </div>
                
                <div className="d-flex flex-row justify-content-center">
                    <button id="changePw" onClick={changePw} className="btn-form col-xl-6 col-lg-9 col-md-10 col-11" type="submit">
                        Cambiar contraseña
                    </button>
                </div>
                
            </form>
        </div>
    );
};