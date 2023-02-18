import React, {useState} from 'react'
import styled from "styled-components";
import {  useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import {FaPlus} from "react-icons/fa"





function Chat() {

const navigate = useNavigate();
const [isOpen, setIsOpen] = useState(false);


return (
    <>
    <Container>
      <div className='header'>
     <h1>Channels</h1>
     <FaPlus />
      </div>
      <div className="container">
     <input type="search" placeholder='search channel....' />
     
      </div>
    </Container>

   
   
    <Main>
    <Footer />            
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
background-color: rgb(20,20,20);
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
  justify-content: space-between;
   
 }

`

const Main = styled.div`
height:100vh;
width:100vw;
background-color: rgb(51, 49, 49);
`


export default Chat;