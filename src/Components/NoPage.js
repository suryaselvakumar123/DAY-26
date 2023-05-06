import React from "react";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export function Nopage(){
    const history = useHistory()
    return (
        <div>
            <h1>Hi you entered wrong place 404</h1>
            <Button
            onClick={()=>history.push("/")}>
               Dashboard
            </Button>
        </div>
    )
}