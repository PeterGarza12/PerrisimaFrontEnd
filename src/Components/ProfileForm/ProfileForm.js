import React, { useState } from "react";
import './ProfileForm.css'
import $ from "jquery";
import { editUser } from "../../services/usersService";
import Swal from "sweetalert2";
import { updateSessionStorageUser } from "../../Utils/sessionStorage";

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

    const togglePwBox = (e) => {
        e.preventDefault();
        $("#passwords").toggle();
        $("#changePw").toggle();
    }

    const changePw = async (e) => {
        e.preventDefault();
        var oldP = $("#oldPw").val();
        var newP = $("#newPw").val();
        var confNewP = $("#confirmNewPw").val();
        
        var regex = /((?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,})/;
        console.log(regex.test(newP));
        if (!regex.test(newP))
        {
            Swal.fire({
                title: 'La contraseña nueva no es válida',
                text: 'La contraseña debe de contener solo 8 caracteres, con al menos 1 caractér especial y 1 número',
                icon: 'warning',
                confirmButtonText: 'Ok'
              });
            return;
        }

        if (newP === confNewP && user.password === oldP){
            var data = {
                password: newP
            }
            var response = await editUser(data, user.id);

            if (response.status === 200){
                updateSessionStorageUser({password: newP});
                Swal.fire({
                    title: 'Contraseña cambiada correctamente',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  });

                $("#passwords").toggle();
                $("#changePw").toggle();
            }
            else if (response.status === 422)
            {
                Swal.fire({
                    title: 'La contraseña nueva no es válida',
                    text: 'La contraseña debe de contener solo 8 caracteres, incluyendo 1 mayúscula, 1 caractér especial y 1 número',
                    icon: 'warning',
                    confirmButtonText: 'Ok'
                  });
            }
            else
            {
                Swal.fire({
                    title: 'Algo salió mal',
                    icon: 'warning',
                    confirmButtonText: 'Ok'
                  });
            }
        }
        else if (user.password !== oldP)
        {
            Swal.fire({
                title: 'Contraseña incorrecta',
                icon: 'error',
                confirmButtonText: 'Ok'
              });
        }
        else
        {
            Swal.fire({
                title: 'Las contraseñas no coinciden',
                icon: 'error',
                confirmButtonText: 'Ok'
              });
        }
        
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

                <div id="passwords" className="col-12 flex-column justify-content-center align-items-center">
                    <label>
                        Contraseña actual
                        <input 
                            id="oldPw" 
                            className="col-12" 
                            type="password" 
                            placeholder="Ingrese su contraseña actual" 
                            value={ActualPassword} 
                            onChange={handleActualPasswordChange}
                            maxLength="8"
                        />
                    </label>

                    <label>
                        Contraseña nueva
                        <input 
                            id="newPw" 
                            className="col-12" 
                            type="password" 
                            placeholder="Ingrese la contraseña que desea" 
                            value={NewPassword} 
                            onChange={handleNewPasswordChange}
                            maxLength="8"
                            pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8})/"
                            onInvalid={e => e.target.setCustomValidity('Contraseña inválida')}
                            onInput={e => e.target.setCustomValidity('')}
                        />
                    </label>

                    <label>
                        Confirmar contraseña nueva
                        <input 
                            id="confirmNewPw" 
                            className="col-12" 
                            type="password" 
                            placeholder="Confirme su nueva contraseña" 
                            value={ConfirmPassword} 
                            onChange={handleConfirmPasswordChange}
                            maxLength="8"
                            pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8})/"
                            onInvalid={e => e.target.setCustomValidity('Contraseña inválida')}
                            onInput={e => e.target.setCustomValidity('')}
                        />
                    </label>

                    <button id="savePw"  onClick={changePw} className="btn-form col-xl-6 col-lg-9 col-md-10 col-12" type="submit">
                        Guardar
                    </button>
                </div>
                
                <div className="d-flex flex-row justify-content-center">
                    <button id="changePw" onClick={togglePwBox} className="btn-form col-xl-6 col-lg-9 col-md-10 col-11">
                        Cambiar contraseña
                    </button>
                </div>
                
            </form>
        </div>
    );
};