import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import loader from "../assets/loader.gif"
import styled from "styled-components";
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  {setAvatarRoute}  from '../utils/ApiRoutes';
import { Buffer } from "buffer";


function SetAvatar() {
const api = "https://api.multiavatar.com/45678945";
const navigate = useNavigate();
const [avatars, setAvatars] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [selectedAvatar, setSelectedAvatar] = useState(undefined);

const toastOptions= {
    position:"bottom-right",
    autoClose:8000,
    pauseOnHover: true,
    draggable:true,
    theme:"dark"
  }

const setProfilePicture = async () =>{};

useEffect(async () => {
    const data = [];
    for(let i=0; i<4; i++){
        const image = await axios.get(`${api}${Math.round(Math.random() * 1000)}`)
        const buffer = new Buffer(image.data)
        data.push(buffer.toString("base64"))
    }
    setAvatars(data);
    setIsLoading(false)
    
}, [])
  return (
  <>
    <Container>
        <div className="title-container">
            <h1>choose an avatar for your profile picture!</h1>
        </div>
        <div className="avatars" >
           {
            avatars.map((avatar,index) => {
               return(
                <div className={`avatar ${selectedAvatar === index ? "selected" : " "}`} key={index}>
                  <img src={`data:image/svg+xml;base64,${avatar}`} alt="avatar-img" onClick={() => setSelectedAvatar(index)} />
                </div>
               )
            })
           }
        </div>
    </Container>
    <ToastContainer />
  </>
  )
}

const Container  = styled.div`

`

export default SetAvatar;