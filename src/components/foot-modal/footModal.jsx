import React from "react";
import styled from "styled-components";

const FootModal = ({closeFoot}) => {
    return(
        <FootBack>
            <FootCont>
               <h3>my Profile</h3>
               Logout
            </FootCont>
            <button onClick={() => closeFoot(false)}>x</button>
        </FootBack>
    )
}


export default FootModal;


const FootBack = styled.div`
     height: 15%;
     width: 10vw;
     background-color: #7d7979;
     border-radius: 5%;
     bottom: 40px;
     left: 0;
     right: 0;
     position: fixed;
     float: right;
     margin-left: 220px;
     z-index: 10;

`
const FootCont = styled.div`
  display: flex;
  flex-direction: column;
  gap :1rem ;
  padding: 10px;
  font-size: 15px;
   
`