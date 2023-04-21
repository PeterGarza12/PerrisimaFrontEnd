import React from "react";
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
                navigate: 'Clients',
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
                navigate: 'Employees',
                imagen: empleados,
                nombre: 'Empleados',
            },
        ]}
    />
);


export const Main = () => {
    return(
        <div className="mainPage d-flex flex-column">
            {/* Imagen de portada */}
            <CardImg
                alt="Card image cap"
                src={portada}
                style={{
                    width: "100%",
                    height: "60%",
                }}
            />
            <h1 className="welcomeText">Bienvenida de nuevo Usuario</h1>
            <Container className="centrado">
                {mainFunctions}
            </Container>
            <button className="logout col-6 col-sm-8 col-md-4">Cerrar sesión</button>
        </div>
    )
}