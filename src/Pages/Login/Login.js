import React from "react";
import Swal from 'sweetalert2';
import LoginForm from "../../Components/LoginForm/LoginForm";
import './Login.css';
import { getUserByEmail } from "../../services/usersService";
import { useNavigate } from "react-router-dom";
import { mistakeMessage, tryLater } from "../../Components/Alerts/Alerts";
import { CardImg } from "reactstrap";
import LogoNegro from './../../Res/perrisima-color.png';

export const Login = () => {

    const navigate = useNavigate();

    const toTheMain =() => {
        navigate("/main");
    };


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
                    console.log("al main alv");
                    //navigate("/main");
                   
                }
                else if (response.status === 401)
                {
                    mistakeMessage("Credenciales incorrectas");
                }
                else if (response.status === 404)
                {
                    mistakeMessage("El usuario no existe");
                }
                else
                {
                    tryLater();
                }
                toTheMain();
            }}/>
        </div>
    );
};