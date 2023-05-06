import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import BaseApp from "../Core/Base";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


export function AddUser({user, setUser}){
    const history = useHistory()
    //defining states
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [experience, setExperience] = useState();
    const [batch, setBatch]= useState("");

    const addNewUser = ()=>{
        const newUser = {
            id,
            name,
            email,
            batch,
            experience
        }
        console.log(newUser)
        setUser([...user, newUser])
        history.push("/")
    } 
    
    return (
        <BaseApp
        title={"Add A New User"}>
            <div >
             <div className='edit '>
        

        <FloatingLabel controlId="floatingInput" label="ID" className="mb-3">
          <Form.Control type="text" placeholder="Id"
           
              onChange={(event)=>setId(event.target.value)} />
        </FloatingLabel>
  
        <FloatingLabel controlId="floatingPassword" label="Name" className="mb-3">
          <Form.Control type="text"    placeholder="Name"
            
              onChange={(event)=>setName(event.target.value)} />
        </FloatingLabel>
             
        <FloatingLabel controlId="floatingPassword" label="Email" className="mb-3">
          <Form.Control type="email"  placeholder="Email"
             
              onChange={(event)=>setEmail(event.target.value)} />
        </FloatingLabel>
  
  
        <FloatingLabel controlId="floatingPassword" label="Experience" className="mb-3">
          <Form.Control type="Number" placeholder="Experience"
            
              onChange={(event)=>setExperience(event.target.value)} />
        </FloatingLabel>
  
  
        <FloatingLabel controlId="floatingPassword" label="Batch" className="mb-3">
          <Form.Control type="text"   placeholder="Batch"
             
              onChange={(event)=>setBatch(event.target.value)} />
        </FloatingLabel>
            

                <Button
                onClick={addNewUser}
                >Add</Button>
        </div>
        </div>
        </BaseApp>
    )
}