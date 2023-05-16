import React, { useState } from "react";
import './FormsClient.css'
import { getClientByPhone } from "../../services/clientsService";

export default function ModifyClient(props){


    const [enable, setEnable] = useState(true);
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

    const handleSearchClient = async (e) => {
        console.log("holi");
        e.preventDefault();

       console.log(Phone);

            var response = await getClientByPhone(Phone);
            
            if (response.status === 200)
            {
                document.getElementById("name").value = response.data.name;
                document.getElementById("phone").value = response.data.phone_number;
                
            }
            else if (response.response.status === 404)
            {
                alert("Cliente no encontrado");
            }
            else
            {
                alert("Algo salió mal, vuelva a intentarlo más tarde");
            }
            
            props.onClientSearch(Phone);
        
    }

    return(
        <div className="login-form d-flex justify-content-center">

            <div className="d-flex flex-column align-items-center col-12">

                <div id="form" role="search" className="col-xl-7 col-lg-8 col-md-10 col-11">
                    <input className="col-10" type="search" id="query" name="q" placeholder="Ingrese teléfono de la clienta a editar" onChange={handlePhoneChange} aria-label="Search through site content"></input>
                    <button className="col-2" onClick={handleSearchClient}>Buscar</button>
                </div>

                <form className="modifyForm col-xl-7 col-lg-8 col-md-10 col-11 d-flex flex-column justify-content-between">
                    <h1 className="h1-form modifyClientForm">Información de clienta a editar</h1>

                    <label>
                        Nombre
                        <input id="name" className="col-12" type="text" placeholder="Ingrese nombre de la clienta" value={Name} onChange={handleNameChange} disabled = {enable}></input>
                    </label>

                    <label>
                        Apellido
                        <input id="lastname" className="col-12" type="text" placeholder="Ingrese apellido de la clienta" value={Lastname} onChange={handleLastnameChange} disabled = {enable}></input>
                    </label>

                    <label>
                        Teléfono
                        <input id="phone" className="col-12" type="number" placeholder="Ingrese teléfono de la clienta" value={Phone} onChange={handlePhoneChange} disabled = {enable}></input>
                    </label>
                    
                    <div className="d-flex flex-row justify-content-center">
                        <button className="btn-form btnModifyClient col-xl-6 col-lg-9 col-md-10 col-11" type="submit" hidden={enable}>
                            Editar clienta
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};