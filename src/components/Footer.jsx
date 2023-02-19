import React from "react";
import styled from "styled-components";
import {FaPlus} from "react-icons/fa";


const Footer = () => {
   return(
    <FootDiv>
       <input type="text" placeholder="Type Messages Here...."   /> <FaPlus />
    </FootDiv>
   )
}

export default Footer;



const FootDiv = styled.div`
  position: fixed;
  background-color: rgb(51, 49, 49);
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px;
  text-align: center;
  
    input{
        padding: 10px;
        width: 50%;
        height: 20%;
        
        
    }
`