import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import BaseApp from '../Core/Base';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const EditUser = ({user, setUser}) => {
    const [name, setName] = useState("");
    const [idx, setIdx] = useState("");
    const [email, setEmail] = useState("");
    const [experience, setExperience] = useState();
    const [batch, setBatch]= useState("");

  const {id} = useParams();
  const history = useHistory()

  const selectedUser = user.find((per)=>per.id === id); 

  useEffect(() => {
     setIdx(selectedUser.id)
     setName(selectedUser.name)
     setEmail(selectedUser.email)
     setExperience(selectedUser.experience)
     setBatch(selectedUser.batch)

  }, []);

//
  const updateUser = ()=>{
  // step 1 : collecting new data
   const editIndex = user.findIndex(per => per.id === id)
   console.log(editIndex)
    //chnaged data in the input field
    const editedData = {
        id :idx, 
        name, 
        email, 
        experience, 
        batch
    }
    //updating the user
     user[editIndex] = editedData
     setUser([...user]); 
     history.push("/");
  }

  return (
    <BaseApp
    title={"Edit the user details"}
    >
         <div className='edit'>
        

      <FloatingLabel controlId="floatingInput" label="ID" className="mb-3">
        <Form.Control type="text" placeholder="Id"
            value ={idx}
            onChange={(event)=>setIdx(event.target.value)} />
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Name" className="mb-3">
        <Form.Control type="text"    placeholder="Name"
            value= {name}
            onChange={(event)=>setName(event.target.value)} />
      </FloatingLabel>
           
      <FloatingLabel controlId="floatingPassword" label="Email" className="mb-3">
        <Form.Control type="email"  placeholder="Email"
            value= {email}
            onChange={(event)=>setEmail(event.target.value)} />
      </FloatingLabel>


      <FloatingLabel controlId="floatingPassword" label="Experience" className="mb-3">
        <Form.Control type="Number" placeholder="Experience"
            value = {experience}
            onChange={(event)=>setExperience(event.target.value)} />
      </FloatingLabel> 


      <FloatingLabel controlId="floatingPassword" label="Batch" className="mb-3">
        <Form.Control type="text"   placeholder="Batch"
            value = {batch}
            onChange={(event)=>setBatch(event.target.value)} />
      </FloatingLabel>
          

            <Button
            onClick={updateUser}
            >Edit</Button>
    </div>
    </BaseApp>
  )
}

export default EditUser