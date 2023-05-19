import React, { useState } from "react";
import './FormsClient.css'

export default function CreateClient(props){
    
    
    const [Name, setName] = useState("");
    const [Lastname, setLastname] = useState("");
    const [Phone, setPhone] = useState("");
    

    const handleNameChange =(event) => {
        setName(event.target.value);
    };

    const handleLastnameChange =(event) => {
        setLastname(event.target.value);
    };

    const handlePhoneChange =(event) => {
        setPhone(event.target.value);
    };

     const handleFormSubmit = (e) => {
        e.preventDefault();

        props.onCreateClient(Name, Lastname, Phone);
    }
    return(
        <div className="login-form d-flex justify-content-center">
            <form onSubmit={handleFormSubmit} className="col-xl-7 col-lg-8 col-md-10 col-11 d-flex flex-column justify-content-between">
                <h1 className="h1-form createClientForm">Información de clienta nueva</h1>
                
                <label>
                    Nombre
                    <input className="col-12" type="text" placeholder="Ingrese nombre de la clienta" value={Name} onChange={handleNameChange}></input>
                </label>

                <label>
                    Apellido
                    <input className="col-12" type="text" placeholder="Ingrese apellido de la clienta" value={Lastname} onChange={handleLastnameChange}></input>
                </label>

                <label>
                    Teléfono
                    <input className="col-12" type="number" placeholder="Ingrese teléfono de la clienta" value={Phone} onChange={handlePhoneChange}></input>
                </label>
                
                <div className="d-flex flex-row justify-content-center">
                    <button className="btn-form btnCreateClient col-xl-6 col-lg-9 col-md-10 col-11" type="submit">
                        Crear clienta
                    </button>
                </div>
                
            </form>
        </div>
    );
};