import React from "react";
import IncomeForm from "../../Components/Income/IncomeForm";
import { getClientByPhone } from "../../services/clientsService";
import { useNavigate } from "react-router-dom";

export const Income = () => {

    const navigate = useNavigate();

    return(
        <div>
            <h1 className="titlePage">
                Registro de ingreso
            </h1>
            <IncomeForm onClientSearch={async (phone) => {

            }}/>
        </div>
    );
};