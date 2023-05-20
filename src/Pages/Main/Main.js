import React, { useEffect } from "react";
import './Main.css'
import { CardImg, Container } from "reactstrap";
import portada from './../../Res/portada.jpg';
import { ListOfFunctions } from "../../Components/BoxButton/BoxBtns";
import ingreso from './../../Res/ingreso.png'
import egreso from './../../Res/egreso.png'
import clientes from './../../Res/clientes.png'
import perfil from './../../Res/perfil.png'
import ganancias from './../../Res/ganancias.png'
import empleados from './../../Res/empleados.png'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import VerifyLogIn from "../../verifyLogin";

const mainFunctions =(
    <ListOfFunctions
        functions={[
            {
                navigate: 'Income',
                imagen: ingreso,
                nombre: 'Ingreso',
            },
            {
                navigate: 'Outcome',
                imagen: egreso,
                nombre: 'Egreso',
            },
            {
                navigate: 'Client',
                imagen: clientes,
                nombre: 'Clientes',
            },
            {
                navigate: 'Profile',
                imagen: perfil,
                nombre: 'Perfil',
            },
            {
                navigate: 'Profits',
                imagen: ganancias,
                nombre: 'Ganancias',
            },
            {
                navigate: 'Employee',
                imagen: empleados,
                nombre: 'Empleados',
            },
        ]}
    />
);


export const Main = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [naming, setNaming] = useState("");

    const signOut = () => {
        window.sessionStorage.removeItem("user");
        setIsLoggedIn(false);
        navigate("/");
    }

    const backToLogIn = () => {
         let flag = VerifyLogIn();
        console.log("flag", flag);
        if(flag===null){
        navigate("/");
        }
        else{
            setNaming(flag.name);
        }
    }

    useEffect(() => {
            backToLogIn();
    }, [backToLogIn]);
        
    // var name = ""
    // var user = JSON.parse(window.sessionStorage.getItem("user"));
    // if(user!==null){
    //     name = user.name;
    // }

    return(
        <div className="mainPage d-flex flex-column">
            <CardImg
                alt="Card image cap"
                src={portada}
                style={{
                    width: "100%",
                    height: "60%",
                }}
            />
            <h1 className="welcomeText">Bienvenida de nuevo {naming}</h1>
            <Container className="centrado">
                {mainFunctions}
            </Container>
            <button className="logout col-6 col-sm-8 col-md-4" onClick={signOut}>Cerrar sesión</button>
        </div>
    )
}