import React from "react";
import Swal from 'sweetalert2';
import LoginForm from "../../Components/LoginForm/LoginForm";
import './Login.css';
import { getUserByEmail } from "../../services/usersService";
import { useNavigate } from "react-router-dom";
import { CardImg } from "reactstrap";
import LogoNegro from './../../Res/perrisima-color.png';

export const Login = () => {

    const navigate = useNavigate();

    return(
        <div className="Login-page">
            <CardImg
            className="img-fluid"
              alt="Perrísima"
              src={LogoNegro}
              style={{
                  width: "auto",
                  height: "40%",
              }}
            />
            <LoginForm onLogin={async (email,password) => {
                var response = await getUserByEmail(email, password);

                if (response.status === 200)
                {
                    window.sessionStorage.setItem("user", JSON.stringify(response.data));
                    navigate("/main");
                }
                else if (response.status === 401)
                {
                    Swal.fire({
                        title: 'Credenciales incorrectas',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                      });
                }
                else
                {
                    alert("Algo salió mal, vuelva a intentarlo más tarde");
                }
            }}/>
        </div>
    );
};