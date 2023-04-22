import React, { useState } from "react";
import './../Client/Client.css'
import CreateClient from "../../Components/ClientForms/CreateClient";
import ModifyClient from "../../Components/ClientForms/ModifyClient";
import DeleteClient from "../../Components/ClientForms/DeleteClient";

export const Client = () => {
    const [option, setOption] = useState(1);

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
                    <CreateClient/>
                ) : option===2 ? (
                    <ModifyClient/>
                ) : (
                    <DeleteClient/>
                )
            }



        </div>
    );
};