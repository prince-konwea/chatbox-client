import React from "react";
import { useState } from "react";
import "./modal.css";
import axios from "axios";
// import { channelRoute } from "../../utils/ApiRoutes";

const Modal = ({closeModal}) => {

  const [values, setValues] = useState({
    name: " ",
    description: " ",
  })


  const handleSubmit =  (event)  => {
    event.preventDefault();
    
      const {name, description} = values; 
       axios.post("http://localhost:5050/api/auth/channels",  {
        name,
        description
      }).then(
        response => console.log(response)
      ).catch(err => console.log(err));
      }
      
   
      const handleChange = e => {
        setValues({...values, [e.target.name]: e.target.value})
        
       }
  
  return(
    <div className="modalBackground">
   <div className="modalContainer">
     <h1 className="title">New Channel</h1>
     <form onSubmit={(e) => handleSubmit(e)}>
     <input type="text" placeholder="Channel Name" name="name" onChange={(e) => handleChange(e)}/>
     <textarea name="description" id="" cols="30" rows="5" placeholder="Channel Description"  onChange={(e) => handleChange(e)}></textarea>
     <div className="footer">
       <button id="saveBtn" type="submit"  >Save</button>
     </div>
     </form>
   </div>
    </div>
  )
}

export default Modal;