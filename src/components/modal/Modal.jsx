import React from "react";
import "./modal.css";

const Modal = ({closeModal}) => {
  return(
    <div className="modalBackground">
   <div className="modalContainer">
     <h1 className="title">New Channel</h1>
     <input type="text" placeholder="Channel Name" />
     <textarea name="" id="" cols="30" rows="10" placeholder="Channel Description"></textarea>
     <div className="footer">
       <button id="saveBtn" onClick={() => closeModal(false)}>Save</button>
     </div>
   </div>
    </div>
  )
}

export default Modal;