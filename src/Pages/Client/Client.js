import React, { useState } from "react";
import './../Client/Client.css'
import CreateClient from "../../Components/ClientForms/CreateClient";
import ModifyClient from "../../Components/ClientForms/ModifyClient";
import DeleteClient from "../../Components/ClientForms/DeleteClient";
import { ClientCreate } from "../../services/clientsService";
import { useNavigate } from "react-router-dom";

export const Client = () => {
    const [option, setOption] = useState(1);
    const navigate = useNavigate();

    return(
        <div className="clientPage">
            <h1 className="titlePage">
                Información de clientes
            </h1>
            <div className="h d-flex flex-row justify-content-around">
                <button className="btnClientOption btn1 col-4" onClick={()=>setOption(1)}>Crear       </button>
                <button className="btnClientOption btn2 col-4" onClick={()=>setOption(2)}>Modificar   </button>
                <button className="btnClientOption btn3 col-4" onClick={()=>setOption(3)}>Eliminar    </button>
            </div>
            {
                option===1 ? (
                    <CreateClient onCreateClient={async (name, lastname, phone) => {
                        var response = await ClientCreate(name, lastname, phone);
        
                        if (response.status === 201)
                        {
                            navigate("/main");
                        }
                        else if (response.status === 401)
                        {
                            alert("Credenciales incorrectas");
                        }
                        else
                        {
                            alert("Algo salió mal, vuelva a intentarlo más tarde");
                        }
                    }}/>
                ) : option===2 ? (
                    <ModifyClient onClientSearch={async (phone) => {

                    }}/>
                ) : (
                    <DeleteClient/>
                )
            }



        </div>
    );
};