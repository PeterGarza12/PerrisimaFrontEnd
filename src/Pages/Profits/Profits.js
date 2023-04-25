import React from "react";
import Table from "../../Components/Table/Table";
import './Profits.css'

export const Profits = () => {

    const Headers = (
        [
          { heading: 'Ingreso',       value: '_id' },
          { heading: 'Egreso',       value: 'idUser' },
          { heading: 'Concepto',    value: 'email' },
          { heading: 'Fecha',   value: 'totalSales' },
        ]
      );

      const Rows = (
        [
          {
            _id: "$2000.00",
            idUser: "$0.00",
            email: "Extensiones",
            totalSales: "29-04-2023"
          },
          {
            _id: "$0.00",
            idUser: "$900.00",
            email: "Servicios local",
            totalSales: "29-04-2023"
          }
        ]
      );


    return(
        <div>
            <h1 className="titlePage">
                Ganancias
            </h1>
            <div className="Busquedas">
                <div className="search Tiempo">
                    <p>Ver ganancias por tiempo</p>
                    <input type="radio" id="general" name="time" value="1"/>
                    <label for="general">General</label>

                    <input type="radio" id="year" name="time" value="60"/>
                    <label for="year">Anual</label>  

                    <input type="radio" id="month" name="time" value="100"/>
                    <label for="month">Mensual</label>

                    <button className="btnSearch col-1" type="submit">
                        Buscar
                    </button>
                </div>

                <div className="search Clienta flex-row justify-content-center">
                    <p>Buscar ventas por cliente</p>
                    <div id="form" role="search" className="">
                        <input className="col-10" type="search" id="query" name="q" placeholder="Ingrese teléfono o ID de la clienta" aria-label="Search through site content"></input>
                        <button className="btnSearch col-1" >Buscar</button>
                    </div>
                </div>
                
            </div>
            <h2 className="h2Profits">Ganancias totales: $1100.00</h2>
            <Table data={Rows} column={Headers}/>
        </div>
    );
};