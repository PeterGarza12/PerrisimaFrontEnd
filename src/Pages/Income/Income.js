import React from "react";
import IncomeForm from "../../Components/Income/IncomeForm";
import { createIncome } from "../../services/incomeService";
import { useNavigate } from "react-router-dom";

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
                        navigate("/main");
                    }
                    else if (response.status === 401)
                    {
                        alert("Error");
                    }
                    else
                    {
                        alert("Algo salió mal, vuelva a intentarlo más tarde");
                    }
            }}/>
        </div>
    );
};