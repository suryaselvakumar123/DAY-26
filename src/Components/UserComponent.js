import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Core/Base";



export default function UserComponent({user, setUser}){
const history = useHistory();

   //functionality 
   const deleteUser = (idx)=>{
    const alterList = user.filter((per)=>per.id !== idx);
     setUser(alterList)
   }
    
    return (
        <BaseApp
        title= "User Details">
          <div className="user-content">
             {user.map((person, idx)=>(
                <div key ={idx} className="user-card">
                    <h1>{person.name}</h1>
                    <p>Batch : {person.batch}</p>
                    <p>Email : {person.email}</p>
                    <p>Exp : {person.experience}</p>

                    <div className="btn-group">

                        <button 
                        onClick={()=>history.push(`/edit/${person.id}`)}
                        className="btn edit-btn">
                          Edit</button>

                        <button 
                        className="btn view-btn"
                        onClick={()=>history.push(`/user/${idx}`)}
                        >View</button>

                        <button 
                        className="btn del-btn"
                        onClick={()=>deleteUser(person.id)}
                        >Delete</button>
                        
                    </div>

                </div>
             ))}
          </div>
        </BaseApp>
    )
}