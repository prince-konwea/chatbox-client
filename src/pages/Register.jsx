
import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  {registerRoute}  from '../utils/ApiRoutes';


function Register() {
  const navigate = useNavigate();


  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    const {password, email,username } = values;
    const {data} = await axios.post(registerRoute, {
      username,
      email,
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
  
  const {password, confirmPassword, email,username } = values;
  if(password !== confirmPassword){
    toast.error("password and confirm password should be same", toastOptions);
    return false;
  } else if(username.length < 3){
    toast.error("username should be greater than 3 characters", toastOptions);
    return false;
  } else if(password.length < 8){
    toast.error("password should be equal or greater than 8 characters", toastOptions);
    return false;
} else if(email === "" ) {
  toast.error("email is required", toastOptions);
  return false
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
 <input type="text" placeholder="username" name='username' onChange={e => handleChange(e)} />
 <input type="email" placeholder="email" name='email' onChange={e => handleChange(e)} />
 <input type="password" placeholder="password" name='password' onChange={e => handleChange(e)} />
 <input type="password" placeholder="confirm password" name='confirmPassword' onChange={e => handleChange(e)} />
 <button type='submit'>Create User</button>
 <span>already have an account ? <Link to="/login">Login</Link> </span>
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
background-color: #ffff;
.brand{
  display:flex;
  align-items:center;
  gap:1rem;
  justify-content:center;
  img{
    height:5rem;
  }
  h1{
    color:#ffffff;
    text-transform:uppercase;
  }
  
}
form{
  display:flex;
  flex-direction: column;
  gap:2rem;
  background-color: #000000;
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
  @media screen and (min-width:720px) and(max-width:1080px){
    
   }
   @media screen and (min-width:360px) and(max-width:480px){
     
   }
   
}
`

export default Register;