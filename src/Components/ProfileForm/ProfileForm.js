import React, { useState } from "react";
import './ProfileForm.css'

export default function ProfileForm(){

    const ejemplo = "Angélica";
    
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

    return(
        <div className="login-form d-flex justify-content-center">
            <form className="col-xl-7 col-lg-8 col-md-10 col-11 d-flex flex-column justify-content-between">
                <h1 className="h1-form">Información personal de la empleada</h1>
                
                <label>
                    Nombre
                    <input className="disabled col-12" type="text" placeholder={ejemplo} disabled></input>
                </label>

                <label>
                    Apellido
                    <input className="disabled col-12" type="text" placeholder="Garza" disabled></input>
                </label>

                <label>
                    Email
                    <input className="disabled col-12" type="email" placeholder="angelica@gmail.com" disabled></input>
                </label>

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
                
                <div className="d-flex flex-row justify-content-center">
                    <button className="btn-form col-xl-6 col-lg-9 col-md-10 col-11" type="submit">
                        Cambiar contraseña
                    </button>
                </div>
                
            </form>
        </div>
    );
};