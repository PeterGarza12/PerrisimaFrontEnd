import React, { useState } from "react";
import './FormsClient.css'
import { getClientByPhone } from "../../services/clientsService";
import $ from "jquery";

export default function DeleteClient(props){

        const [Id, setId] = useState("");
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

            e.preventDefault();
           console.log(Phone);
    
            var response = await getClientByPhone(Phone);
            
            if (response.status === 200)
            {
                console.log(response.data);
                let name = response.data.name.split(" ");
                document.getElementById("name").value = name[0];
                document.getElementById("lastname").value = name[1];
                document.getElementById("phone").value = response.data.phone_number;
                $( ".enabling" ).prop( "disabled", false );
                $( ".hidden" ).prop( "hidden", false );
                setId(response.data.id);
                
            }
            else if (response.response.status === 404)
            {
                alert("Cliente no encontrado");
            }
            else
            {
                alert("Algo salió mal, vuelva a intentarlo más tarde");
            }            
        }

        const handleFormSubmit = (e) => {
            e.preventDefault();
    
            props.onDeleteClient(Id, Name, Lastname, Phone);
        }

    return(

        <div className="login-form d-flex justify-content-center">
            <div className="d-flex flex-column align-items-center col-12">

                <div id="form" role="search" className="col-xl-7 col-lg-8 col-md-10 col-11">
                    <input className="col-10" type="search" id="query" name="q" placeholder="Ingrese teléfono de la clienta a eliminar" onChange={handlePhoneChange}  aria-label="Search through site content"></input>
                    <button className="col-2" onClick={handleSearchClient}>Buscar</button>
                </div>

                <form onSubmit={handleFormSubmit} className="deleteForm col-xl-7 col-lg-8 col-md-10 col-11 d-flex flex-column justify-content-between">
                    <h1 className="h1-form DeleteClientForm">Clienta por eliminar</h1>
                    
                    <label>
                        Nombre
                        <input id="name" className="enabling col-12" type="text" placeholder="Ingrese nombre de la clienta" value={Name} onChange={handleNameChange} disabled = {false}></input>
                    </label>

                    <label>
                        Apellido
                        <input  id="lastname" className="enabling col-12" type="text" placeholder="Ingrese apellido de la clienta" value={Lastname} onChange={handleLastnameChange} disabled = {false}></input>
                    </label>

                    <label>
                        Teléfono
                        <input id="phone" className="enabling col-12" type="number" placeholder="Ingrese teléfono de la clienta" value={Phone} onChange={handlePhoneChange} disabled = {false}></input>
                    </label>
                    
                    <div className="d-flex flex-row justify-content-center">
                        <button className="hidden btn-form btnDeleteClient col-xl-6 col-lg-9 col-md-10 col-11" hidden={true}>
                            Eliminar clienta
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};