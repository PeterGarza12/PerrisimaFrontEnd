import React from "react";
import { useState } from "react";
import './OutcomeForm.css'


export default function OutcomeForm(props){

    const [category, setCategory] = useState(1);
    const [comment, setComment] = useState();
    const [gasto, setGasto] = useState();
    
    const handleCategory = (event) =>{

        
        setCategory(event.target.value);
        console.log(category);
    }

    const handleComment = (event) =>{
        setComment(event.target.value);
    }

    const handleGasto = (event) =>{

        setGasto(event.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let user = JSON.parse(window.sessionStorage.getItem("user"));
       
        console.log("userid: ", user);
        props.onRegisterOutcome(category, comment, gasto, user.id);
    }


    return(
        <div className="login-form d-flex justify-content-center">
            <form onSubmit={handleFormSubmit} className="col-xl-7 col-lg-8 col-md-10 col-11 d-flex flex-column justify-content-between">
                <h1 className="h1-form">Gasto</h1>

                <label for="categorias" >Categoría del gasto realizado</label>
                    <select name="categorias" id="categorias" className="col-11" onClick={handleCategory}>
                        <option value="1">        Servicios local     </option>
                        <option value="2">      Material pestañas   </option>
                        <option value="3">          Material uñas       </option>
                        <option value="4">   Material extensiones</option>
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