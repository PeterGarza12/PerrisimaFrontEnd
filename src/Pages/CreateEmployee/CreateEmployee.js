import React from "react";
import EmployeeForm from "../../Components/EmployeeForm/EmployeeForm";
import './CreateEmployee.css'
import { postCreateEmployee } from "../../services/usersService";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { mistakeMessage, tryLater } from "../../Components/Alerts/Alerts";

export const CreateEmployee = () => {

    const navigate = useNavigate();

    return(
        <div className="createEmployeePage">
            <h1 className="titlePage">
                Creación de nuevo usuario
            </h1>
            <EmployeeForm onCreateEmployee={async (name, lastname, email, phone, username) => {
                var response = await postCreateEmployee(name, lastname, email, phone, username);

                if (response.status === 201)
                {
                    Swal.fire({
                        title: 'Usuario creado con éxito',
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