import React from "react";
import EmployeeForm from "../../Components/EmployeeForm/EmployeeForm";
import './CreateEmployee.css'

export const CreateEmployee = () => {
    return(
        <div className="createEmployeePage">
            <h1 className="titlePage">
                Creación de nuevo usuario
            </h1>
            <EmployeeForm/>
        </div>
    );
};