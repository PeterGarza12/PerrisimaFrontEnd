import React from "react";
import { Link } from "react-router-dom";
import './BoxButton.css'

export const BoxButton = ({navigate, imagen, nombre}) => {

    console.log("prueba:", navigate);
    return(
        <Link className="boxButton d-flex flex-column" to={`/${navigate}`} >
            <img className="img-btn" src={imagen} alt="buttonpng" border="0" />
            <p className=" txtbtn d-flex flex-column justify-content-center" >{nombre}</p>
        </Link>
    );
};