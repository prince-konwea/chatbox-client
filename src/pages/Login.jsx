
import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  {LoginRoute}  from '../utils/ApiRoutes';


function Login() {
  const navigate = useNavigate();


  const [values, setValues] = useState({
    username: "",
    password: "",
   
  })

  const toastOptions= {
    position:"bottom-right",
    autoClose:8000,
    pauseOnHover: true,
    draggable:true,
    theme:"dark"
  }

useEffect(() => {
  if(localStorage.getItem("chat-box-user")){
     navigate("/")
  }
}, [])


const handleSubmit = async (event)  => {
  event.preventDefault();
  if(handleValidation()){
    const {password, username, } = values;
    const {data} = await axios.post(LoginRoute, {
      username,
      password,
    });

    if(data.status === false){
      toast.error(data.msg, toastOptions)
    }
    if(data.status === true){
      localStorage.setItem("chat-box-user", JSON.stringify(data.user))
      navigate("/");
    }
    
  }
}

const handleValidation = () => {
  
  const {password, username, } = values;
  if(password === ""){
    toast.error("username and password required", toastOptions);
    return false;
  } else if(username.length === ""){
    toast.error("username and password required", toastOptions);
    return false;
  } 
return true;
}

const handleChange = e => {
 setValues({...values, [e.target.name]: e.target.value})
}

  return (
    <>
    <FormContainer>
      <form onSubmit={e => handleSubmit(e)}>
       <div className='brand'>
        <h1>ChatBox</h1>
       </div>
 <input type="text" placeholder="username" name='username' onChange={e => handleChange(e)} min="3"/>
 <input type="password" placeholder="password" name='password' onChange={e => handleChange(e)} />
 <button type='submit'>Login In</button>
 <span>Don't have an account? <Link to="/register">Register</Link> </span>
      </form>
    </FormContainer>
    <ToastContainer />
    </>
  )
}



const FormContainer = styled.div`
height: 100vh;
width:100vw;
display:flex;
flex-direction:column;
justify-content:center;
gap:1rem;
align-items:center;
background-color: rgb(20, 20, 20);
.brand{
  display:flex;
  align-items:center;
  gap:1rem;
  justify-content:center;
  img{
    height:5rem;
  }
  h1{
    color:white;
    text-transform:uppercase;
  }
  
}
form{
  display:flex;
  flex-direction: column;
  gap:2rem;
  background-color: #00000076;
  border-radius:2rem;
  padding: 3rem 5rem;
  input{
    background-color: transparent;
    padding:1rem;
    border: 0.1rem solid #4e0eff;
    border-radius:0.4rem;
    color:white;
    width:100%;
    font-size:1rem;
    &:focus{
      border:0.1rem solid #997af0;
      outline:none;
    }
  }
  button{
    background-color:#997af0;
    color:white;
    padding:1rem 2rem;
    border:none;
    font-weight:bold;
    cursor:pointer;
    border-radius:0.4rem;
    font-size:1rem;
    text-transform:uppercase;
    transition:0.5s ease-in-out;
    &:hover{
      background-color:#4e0eff;
    }
  }
  span{
    color: white;
    text-transform:uppercase;
  }
  a{
    color: #4e0eff;
    text-decoration:none;
    font-weight:bold;
  }
}
`

export default Login;