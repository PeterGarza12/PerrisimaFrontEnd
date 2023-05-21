import React, { useState, useEffect } from "react";
import './ProfileForm.css'
import $ from "jquery";
import { editUser } from "../../services/usersService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { updateSessionStorageUser } from "../../Utils/sessionStorage";
import VerifyLogIn from "../../verifyLogin";

export default function ProfileForm(){

    const [Name, setName] = useState("");
    const [Username, setUsername] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = (e) => {
      e.preventDefault();
      setShowPassword(!showPassword);
    };

    var user = JSON.parse(window.sessionStorage.getItem("user"));
    // if(user!== null){
    //     setName(user.name);
    //     setUsername(user.user_name);
    //     setEmail(user.email);
    //     setPhone(user.user_phone);
    // }

    const navigate = useNavigate();
    
    const backToLogIn = () => {
        let flag = VerifyLogIn();
       if(flag===null){
       navigate("/");
       }
       else{
        console.log(flag);
        setName(flag.name);
        setUsername(flag.user_name);
        setEmail(flag.email);
        setPhone(flag.phone_number);
       }
   }

   useEffect(() => {
           backToLogIn();
   }, [backToLogIn]);
    
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
                    <input className="disabled col-12" type="text" disabled value={Name}></input>
                </label>

                <label>
                    Nombre de usuario
                    <input className="disabled col-12" type="text" disabled value={Username}></input>
                </label>

                <label>
                    Email
                    <input className="disabled col-12" type="email" value={Email} disabled></input>
                </label>

                <label>
                    Teléfono
                    <input className="disabled col-12" type="number" value={Phone} disabled></input>
                </label>

                <div id="passwords" className="col-12 flex-column justify-content-center align-items-center">
                    <label className="col-10">
                        Contraseña actual
                        <div className="d-flex flex-row">
                            <input 
                                id="oldPw" 
                                className="col-12" 
                                type={showPassword ? 'text' : 'password'} 
                                placeholder="Ingrese su contraseña actual" 
                                value={ActualPassword} 
                                onChange={handleActualPasswordChange}
                                maxLength="8"
                            />
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

                    <label className="col-10">
                        Contraseña nueva
                        <div className="d-flex flex-row">
                            <input 
                                id="newPw" 
                                className="col-12" 
                                type={showPassword ? 'text' : 'password'} 
                                placeholder="Ingrese la contraseña que desea" 
                                value={NewPassword} 
                                onChange={handleNewPasswordChange}
                                maxLength="8"
                                pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8})/"
                                onInvalid={e => e.target.setCustomValidity('Contraseña inválida')}
                                onInput={e => e.target.setCustomValidity('')}
                            />
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

                    <label className="col-10"> 
                        Confirmar contraseña nueva
                        <div className="d-flex flex-row">
                            <input 
                                id="confirmNewPw" 
                                className="col-12" 
                                type={showPassword ? 'text' : 'password'} 
                                placeholder="Confirme su nueva contraseña" 
                                value={ConfirmPassword} 
                                onChange={handleConfirmPasswordChange}
                                maxLength="8"
                                pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8})/"
                                onInvalid={e => e.target.setCustomValidity('Contraseña inválida')}
                                onInput={e => e.target.setCustomValidity('')}
                            />
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