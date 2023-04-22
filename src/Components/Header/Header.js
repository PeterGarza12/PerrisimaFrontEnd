import React from "react";
import './Header.css';
import { useNavigate } from "react-router-dom";

export const Header = () => {

    const navigate = useNavigate();

    return (
        <div className=" navbar navbar-expand-lg d-flex justify-content-center" >
            <h1 className="nav-h1 col-lg-8" onClick={()=>navigate("/main")}>PERRÍSIMA</h1>
        </div>
    );
};