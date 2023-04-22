import React, { useState } from "react";
import './FormsClient.css'

export default function DeleteClient(){
        const [isHidden, setHidden] = useState(true);

    return(

        <div className="login-form d-flex justify-content-center">
            <div className="d-flex flex-column align-items-center col-12">

                <div id="form" role="search" className="col-xl-7 col-lg-8 col-md-10 col-11">
                    <input className="col-10" type="search" id="query" name="q" placeholder="Ingrese teléfono o ID de la clienta a eliminar" aria-label="Search through site content"></input>
                    <button className="col-2" onClick={()=>{setHidden(false)}}>Buscar</button>
                </div>

                <form className="deleteForm col-xl-7 col-lg-8 col-md-10 col-11 d-flex flex-column justify-content-between">
                    <h1 className="h1-form DeleteClientForm">Clienta por eliminar</h1>
                    
                    <label>
                        Nombre
                        <input className="col-12" type="text" placeholder="Ingrese nombre de la clienta" value={"Name"} disabled></input>
                    </label>

                    <label>
                        Apellido
                        <input className="col-12" type="text" placeholder="Ingrese apellido de la clienta" value={"Lastname"} disabled></input>
                    </label>

                    <label>
                        Teléfono
                        <input className="col-12" type="number" placeholder="Ingrese teléfono de la clienta" value={"Phone"} disabled></input>
                    </label>
                    
                    <div className="d-flex flex-row justify-content-center">
                        <button className="btn-form btnDeleteClient col-xl-6 col-lg-9 col-md-10 col-11" type="submit" hidden={isHidden}>
                            Eliminar clienta
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};