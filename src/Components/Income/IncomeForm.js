import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import './Income.css'
import { getClientByPhone } from "../../services/clientsService";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import { dataMissing } from "../Alerts/Alerts";

export default function IncomeForm(props){

    let infoComboBox = [
        {label: "Uñas acrílico", value: "Uñas acrílico", price: 350},
        {label: "Baño de acrílico", value: "Baño de acrílico", price: 280},
        {label: "Rubber", value: "Rubber", price: 280},
        {label: "Gelish", value: "Gelish", price: 200},
        {label: "Retiro de uñas", value: "Retiro de uñas", price: 100},
        {label: "Pedicure", value: "Pedicure", price: 400},
        {label: "Pedicure jelly", value: "Pedicure jelly", price: 600},
        {label: "Gel en pies", value: "Gel en pies", price: 150},
        {label: "Acripie", value: "Acripie", price: 250},
        {label: "Extensiones de pestañas", value: "Extensiones de pestañas", price: 400},
        {label: "Rizado de pestañas", value: "Rizado de pestañas", price: 300},
        {label: "Depilación de ceja", value: "Depilación de ceja", price: 150},
        {label: "Depilación bozo", value: "Depilación bozo", price: 100},
        {label: "Depilación cara completa", value: "Depilación cara completa", price: 250},
        {label: "Extensiones cabello 100gr paq. completo", value: "Extensiones cabello 100gr paq. completo", price: 4500},
        {label: "Aplicación extensiones 100gr", value: "Aplicación extensiones 100gr", price: 1000},
        {label: "Retiro de extensiones 100gr", value: "Retiro de extensiones 100gr", price: 500},
        {label: "Retoque extensiones 100gr", value: "Retoque extensiones 100gr", price: 1800},
        {label: "Encapsulado extensiones 100gr", value: "Encapsulado extensiones 100gr", price: 500},
    ]

    const [selected, setSelected] = useState([]);
    const [money, setMoney] = useState(0);
    const [personalized, setPersonalized] = useState(0);
    const [phone, setPhone] = useState("");
    const [category, setCategory] = useState(2);
    const [clientid, setClient] = useState("");
    const [comment, setComment] = useState("");

    const navigate = useNavigate();
    
    const handleCategory = (event) =>{
        setCategory(event.target.value);
    }

    const handlePhoneChange =(event) => {
        setPhone(event.target.value);
    };
    
    const handlePersonalized = (event) =>{
        let valor = event.target.value;
        if(valor===""){
            valor=0;
            console.log("si entró");
        }

        setPersonalized(parseInt(valor));
    }

    const addMoney = ()=>{

        let precio = 0;
        let comentario = "";

        for(let i = 0; i<selected.length; i++){
            precio += selected[i].price;
            comentario += selected[i].value + ", ";
        }
        precio+=personalized;
        setMoney(precio); 
        setComment(comentario);       
    }

    function updateFields(){
        $(".aftersearch").removeAttr("hidden");

    }

    function hideFields(){
        $(".aftersearch").attr("hidden",true);
        $("#name").val("");
        $("#phone").val("");
        setClient(null);
    }

    const handleSearchClient = async (e) => {
        e.preventDefault();


        let phoneregex = /(^[\d]{10}$)/;
        if(!phoneregex.test(phone))
        {
          alert("Rellene el campo correctamente");
          hideFields();
          return;
        } else {

            var response = await getClientByPhone(phone);
            
            if (response.status === 200)
            {
                document.getElementById("name").value = response.data.name;
                document.getElementById("phone").value = response.data.phone_number;
                let clientid = response.data.id;
                setClient(clientid);
                console.log(clientid);
                updateFields();
            }
            else if (response.response.status === 404)
            {
                alert("Cliente no encontrado");
                hideFields();
            }
            else
            {
                alert("Algo salió mal, vuelva a intentarlo más tarde");
                hideFields();
            }
    
        }
        
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        if(selected.data === undefined || money === 0)
        {
            dataMissing("Servicio dado y precio final");
            return;
        }

        props.onIncomeCreate(money,category,comment,clientid);
    }

    console.log("precio:", money);

    return(
        <div className="login-form d-flex justify-content-center">
            <form onSubmit={handleFormSubmit} className="col-xl-7 col-lg-8 col-md-10 col-11 d-flex flex-column justify-content-between">
                <h1 className="h1-form">Venta</h1>

                <label>
                    Buscar clienta
                    <div id="form" role="search" className="col-xl-7 col-lg-8 col-md-10 col-11">
                        <input className="col-10" type="search" id="query" name="q" value={phone} onChange={handlePhoneChange} placeholder="Ingrese teléfono de la clienta que atendió" aria-label="Search through site content"></input>
                        <button onClick={handleSearchClient} id="searchclient" className="col-2">Buscar</button>
                    </div>
                </label>

                <label>
                    Nombre
                    <input id="name" className="col-12" type="text" placeholder="Name" disabled></input>
                </label>

                <label>
                    Teléfono
                    <input id="phone" className="col-12" type="number" placeholder="Phone" disabled></input>
                </label>

                <label for="categorias" className="aftersearch" hidden>Categoría del gasto realizado</label>
                    <select name="categorias" id="categorias" className="col-11 aftersearch" hidden onClick={handleCategory}>
                        <option value="2">      Producto pestañas   </option>
                        <option value="3">          Producto uñas       </option>
                        <option value="4">   Producto extensiones</option>
                    </select>

                <label className="aftersearch" hidden>
                    Servicio/s dado/s
                    <MultiSelect
                    options={infoComboBox}
                    value={selected}
                    onChange={setSelected}
                    labelledBy="Servicio"></MultiSelect>
                </label>

                <label className="aftersearch" hidden>
                    Precio de servicio personalizado
                    <input className="col-12" type="number" placeholder="0" defaultValue={0} onChange={handlePersonalized}></input>
                </label>

                <div className="btnDiv col-3 aftersearch" hidden onClick={addMoney}>
                    Calcular precio total
                </div>

                <div className="d-flex flex-row justify-content-center aftersearch" hidden>
                </div>

                <label className="aftersearch" hidden>
                    Precio final
                    <input className="col-12" type="number" placeholder={money} ></input>
                </label>



                <div className="d-flex flex-row justify-content-center">
                    <button className="btn-form col-xl-6 col-lg-9 col-md-10 col-11 aftersearch" hidden type="submit">
                        Registrar venta
                    </button>
                </div>

            </form>
        </div>
    );
};