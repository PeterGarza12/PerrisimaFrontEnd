import React, { useState } from "react";

export default function EmployeeForm(props){
    
    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [Lastname, setLastname] = useState("");
    const [Phone, setPhone] = useState("");
    const [Username, setUsername] = useState("");

    const handleEmailChange =(event) => {
        setEmail(event.target.value);
    };

    const handleNameChange =(event) => {
        setName(event.target.value);
    };

    const handleLastnameChange =(event) => {
        setLastname(event.target.value);
    };

    const handlePhoneChange =(event) => {
        setPhone(event.target.value);
    };

    const handleUsernameChange =(event) => {
        setUsername(event.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        props.onCreateEmployee(Name, Lastname, Email, Phone, Username);
    }

    return(
        <div className="login-form d-flex justify-content-center">
            <form onSubmit={handleFormSubmit} className="col-xl-7 col-lg-8 col-md-10 col-11 d-flex flex-column justify-content-between">
                <h1 className="h1-form">Información empleada nueva</h1>
                
                <label>
                    Nombre
                    <input className="col-12" type="text" placeholder="Ingresar nombre de la empleada" value={Name} onChange={handleNameChange}></input>
                </label>

                <label>
                    Apellido
                    <input className="col-12" type="text" placeholder="Ingresar apellido de la empleada" value={Lastname} onChange={handleLastnameChange}></input>
                </label>

                <label>
                    Email
                    <input className="col-12" type="email" placeholder="Ingresar email de la empleada" value={Email} onChange={handleEmailChange}></input>
                </label>

                <label>
                    Teléfono celular
                    <input className="col-12" type="number" placeholder="Ingresar número teléfonico de la empleada" value={Phone} onChange={handlePhoneChange}></input>
                </label>

                <label>
                    Nombre de usuario
                    <input className="col-12" type="text" placeholder="Ingresar nombre de usuario de la empleada" value={Username} onChange={handleUsernameChange}></input>
                </label>

                <div className="d-flex flex-row justify-content-center">
                    <button className="btn-form col-xl-6 col-lg-9 col-md-10 col-11" type="submit">
                        Crear empleada
                    </button>
                </div>
                
            </form>
        </div>
    );
};