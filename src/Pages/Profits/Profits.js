import React from "react";
import Table from "../../Components/Table/Table";
import './Profits.css';
import { useEffect, useState } from "react";
import { getAll, getDataByFilters } from "../../services/profitService";
import $ from "jquery";

const Headers = (
  [
    { heading: 'Ingreso',       value: 'amounti' },
    { heading: 'Egreso',       value: 'amount' },
    { heading: 'Concepto',    value: 'comment' },
    { heading: 'Fecha',   value: 'created_at' },
  ]
);

function Profits() {

      const [dataTable, setDataTable] = useState([]);
      const [month, setMonth] = useState(false);
      const [year, setYear] = useState(false);
      const [phone, setPhone] = useState("");
      const [total, setTotal] = useState(0);
      var totalsum = 0;

      const handlePhoneChange =(event) => {
        setPhone(event.target.value);
    };

      const handleRadioChange =(event) => {
        var m = false;
        var y = false;
        if($('#general').is(':checked')) {
          m = false;
          y = false;
        } else if ($('#year').is(':checked')){
          m = false;
          y = true;
        } else if ($('#month').is(':checked')){
          m = true;
          y = false;
        }
        setMonth(m);
        setYear(y);
    };

    function getTotal(item){
      totalsum += item.amount;
      setTotal(totalsum);
      if(item.client_id != null){
        Object.defineProperty(item, "amounti",
          Object.getOwnPropertyDescriptor(item, "amount"));
      delete item["amount"];
      }
    }


      const handleFilters = async (e) => {
        e.preventDefault();

        if(phone == ""){
          setPhone(null);
        }

        var response = await getDataByFilters(phone, month, year);
        var data = response.data;
        data.forEach(getTotal);
        
        setDataTable(response.data)

      }

    return(

        <form onSubmit={handleFilters}>
            <h1 className="titlePage">
                Ganancias
            </h1>
            <div className="Busquedas">
                <div className="search Tiempo">
                    <p>Ver ganancias por tiempo</p>
                    <input type="radio" id="general" onChange={handleRadioChange} name="time" value="1"/>
                    <label for="general">General</label>

                    <input type="radio" id="year" onChange={handleRadioChange} name="time" value="60"/>
                    <label for="year">Anual</label>  

                    <input type="radio" id="month" onChange={handleRadioChange} name="time" value="100"/>
                    <label for="month">Mensual</label>

                </div>

                <div className="search Clienta flex-row justify-content-center">
                    <p>Buscar ventas por cliente</p>
                    <div id="form" role="search" className="">
                        <input className="col-10" type="search" id="query" name="q" value={phone} onChange={handlePhoneChange} placeholder="Ingrese teléfono de la clienta" aria-label="Search through site content"></input>
                    </div>
                </div>

                <button className="btnSearch col-2" type="submit">Buscar</button>

                
            </div>
            <h2 className="h2Profits">Ganancias totales: {total}</h2>
            <Table data={dataTable} column={Headers}/>
        </form>
    );
};

export default Profits;