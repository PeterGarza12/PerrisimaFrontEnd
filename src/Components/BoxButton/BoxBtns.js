import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import { BoxButton } from "./BoxButton";

import './BoxButton.css'


export class ListOfFunctions extends Component {
    constructor(props){
        super(props);
        this.state = {
            functions: props.functions,
        };
    }

    render(){
        var functions = this.state.functions;
        console.log("Botones", functions);
        return(
            <Row>
                {
                    functions.map((x,i)=>(
                        <Col key={i}>
                            <BoxButton imagen={x.imagen}{...x}></BoxButton>
                        </Col>
                    ))
                }
            </Row>
        );
    }

}