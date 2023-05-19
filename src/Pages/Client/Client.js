import React, { useState } from "react";
import './../Client/Client.css'
import CreateClient from "../../Components/ClientForms/CreateClient";
import ModifyClient from "../../Components/ClientForms/ModifyClient";
import DeleteClient from "../../Components/ClientForms/DeleteClient";
import { ClientCreate, ClientModify, ClientDelete} from "../../services/clientsService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { mistakeMessage, tryLater } from "../../Components/Alerts/Alerts";

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
                            Swal.fire({
                                title: 'Clienta creada con éxito',
                                icon: 'success',
                                confirmButtonText: 'Ok'
                            }).then(function() {
                                navigate("/main");
                            });
                        }
                        else if (response.status === 401)
                        {
                            mistakeMessage();
                        }
                        else
                        {
                            tryLater();
                        }
                    }}/>
                ) : option===2 ? (
                    <ModifyClient onModifyClient={async (id, name, lastname, phone) => {
                        var response = await ClientModify(id, name, lastname, phone);
        
                        if (response.status === 200)
                        {
                            Swal.fire({
                                title: 'Clienta modificada con éxito',
                                icon: 'success',
                                confirmButtonText: 'Ok'
                            }).then(function() {
                                navigate("/main");
                            });
                        }
                        else if (response.status === 401)
                        {
                            mistakeMessage();
                        }
                        else
                        {
                            tryLater();
                        }
                    }}/>
                ) : (
                    <DeleteClient onDeleteClient={async (id, name, lastname, phone) => {
                        var response = await ClientDelete(id, name, lastname, phone);
        
                        if (response.status === 200)
                        {
                            Swal.fire({
                                title: 'Clienta eliminada con éxito',
                                icon: 'success',
                                confirmButtonText: 'Ok'
                            }).then(function() {
                                navigate("/main");
                            });
                        }
                        else if (response.status === 401)
                        {
                            mistakeMessage();
                        }
                        else
                        {
                            tryLater();
                        }
                    }}/>
                )
            }



        </div>
    );
};