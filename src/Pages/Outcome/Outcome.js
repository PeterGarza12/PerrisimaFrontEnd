import React from "react";
import OutcomeForm from "../../Components/OutcomeForm/OutcomeForm";
import { useNavigate } from "react-router-dom";
import { OutcomeCreate } from "../../services/outcomeService";

export const Outcome = () => {

    let navigate = useNavigate();
    return(
        <div>
            <h1 className="titlePage">
                Registro de egreso
            </h1>
            <OutcomeForm onRegisterOutcome={async (category, comment, total,  userid) => {
                        var response = await OutcomeCreate(category, comment, total, userid);
        
                        
                        if (response.status === 200)
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
        </div>
    );
};