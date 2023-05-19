import React from "react";
import IncomeForm from "../../Components/Income/IncomeForm";
import { createIncome } from "../../services/incomeService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { mistakeMessage, tryLater } from "../../Components/Alerts/Alerts";

export const Income = () => {

    const navigate = useNavigate();

    return(
        <div>
            <h1 className="titlePage">
                Registro de ingreso
            </h1>
            <IncomeForm onIncomeCreate={async (amount, category, comment, clientid) => {
                    var response = await createIncome(amount, category, comment, clientid);
                            
                                            
                    if (response.status === 200 || response.status === 201)
                    {
                        Swal.fire({
                            title: 'Ingreso creado con éxito',
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
        </div>
    );
};