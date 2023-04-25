import React from "react";
import { useState } from "react";
import './OutcomeForm.css'


export default function OutcomeForm(){

    const [comment, setComment] = useState();
const [gasto, setGasto] = useState();

    const handleComment = (event) =>{

        setComment(event.target.value);
    }

    const handleGasto = (event) =>{

        setGasto(event.target.value);
    }


    return(
        <div className="login-form d-flex justify-content-center">
            <form className="col-xl-7 col-lg-8 col-md-10 col-11 d-flex flex-column justify-content-between">
                <h1 className="h1-form">Gasto</h1>

                <label for="categorias" >Categoría del gasto realizado</label>
                    <select name="categorias" id="categorias" className="col-11">
                        <option value="Servicios local">        Servicios local     </option>
                        <option value="Material pestañas">      Material pestañas   </option>
                        <option value="Material uñas">          Material uñas       </option>
                        <option value="Material extensiones">   Material extensiones</option>
                    </select>
                    
                <label>
                    Comentario
                    <input className="col-12" type="text" placeholder="Especifique el concepto de gasto" value={comment} onChange={handleComment}></input>
                </label>

                <label>
                    Gasto total
                    <input className="col-12" type="number" placeholder="Ingrese la cantidad gastada" value={gasto} onChange={handleGasto}></input>
                </label>

                <div className="d-flex flex-row justify-content-center">
                    <button className="btn-form col-xl-6 col-lg-9 col-md-10 col-11" type="submit">
                        Registrar gasto
                    </button>
                </div>

            </form>
        </div>
    );
};