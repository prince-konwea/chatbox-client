import React, {useState} from 'react'
import styled from "styled-components";
import {  useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import {FaPlus, FaAngleDown} from "react-icons/fa"
import Modal from "../components/modal/Modal";
import FootModal from '../components/foot-modal/footModal';




function Chat() {

const navigate = useNavigate();
const [openModal, setOpenModal] = useState(false);
const [openFoot, setOpenFoot] = useState(false)


return (
    <>
    <Container>
      <div className='header'>
     <h1>Channels</h1>
     <div className='plus' onClick={() => setOpenModal(true)}>
       <FaPlus />
     </div>
     {openModal && <Modal closeModal={setOpenModal}/>}
      </div>
      <hr />
      <div className="container">
     <input type="search" placeholder='search channel....' />
     
      </div>
     { openFoot &&  <FootModal  closeFoot={setOpenFoot}/>}
      <div className='container-foot'>
        <h2>prince</h2>
        <div className='plus' onClick={() => setOpenFoot(true)}>
          <FaAngleDown />
        </div>
      </div>
    </Container>

   
   
    <Main>
    <Footer />            
    </Main>
    
    </>
  )
}





const Container = styled.div`
height:100%;
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
   padding: 5px;
 }
  .plus{
    background-color: #000000;
    width: 30px;
    justify-content: center;
    align-content: center;
    border-radius: 3px;
    padding: 10px;
    cursor: pointer;
    :hover{
      background-color: gray;
    }
  }
  .container-foot{
    color: #fff;
    position: fixed;
  background-color: rgb(20, 20, 20);
  bottom: 0;
  left: 0;
  right: 0;
  width: 25vw;
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