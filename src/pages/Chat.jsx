import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import axios from "axios";
import {  useNavigate } from 'react-router-dom';






function Chat() {

const navigate = useNavigate();
const [isOpen, setIsOpen] = useState(false);


return (
    <>
    <Container>
      <div className='header'>
     <h1>Channels</h1>
     <button>search</button>
      </div>
      <div className="container">
     <input type="search" placeholder='search channel....' />
     
      </div>
    </Container>

   
   
    <Main>
    <div className="input-field">
    <input type="text" placeholder='Type your message.....' />
    
    </div>
    </Main>
    
    </>
  )
}





const Container = styled.div`
height:100vh;
width:25vw;
display:flex;
flex-direction:column;
position: fixed;
z-index: 1;
gap:1rem;
background-color: rgb(20, 20, 20);
color: white;
.container{
 display: flex;
 flex-direction: column;
 gap:1rem;
  input{
    padding:10px;
    width: 80%;
    font-weight:bold;
    font-size: 1rem;
   border-radius: 10px; 
  }
}
@media screen and (min-width:720px) and(max-width:1080px){
 
}
@media screen and (min-width:360px) and(max-width:480px){
  
}
 .header{
  display: flex;
  gap: 1rem;
   button{
    cursor:pointer;
    padding: 1rem;
    border-radius: 10px;
    background-color: green;
    color: white;
    font-weight: bold;
    font-size: 1rem;
   }
 }

`

const Main = styled.div`
height:100vh;
width:100vw;
background-color: rgb(51, 49, 49);
 display: flex;
  justify-content:center;
  
 input{
   width:40vw;
   padding:0.7rem;
   border-radius: 0.4rem;
   font-weight: bold;
   font-size: 1.2rem;
 }
 button{
  width:3vw;
  height:5vh
  color:white;
 }
`


export default Chat;