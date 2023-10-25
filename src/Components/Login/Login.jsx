import React, { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [name,setUn]=useState('');
const [pass,setPass]=useState('');
const [error,setError]=useState(false);
const navigate=useNavigate();


const readusername =(event) => {
    event.preventDefault();
    setUn(event.target.value);
    
}
    
    const readpassword =(event) => {
        event.preventDefault();
        setPass(event.target.value);
       
       
}
const readalldata = (event) => {
event.preventDefault();
if(name.trim ()==='' || pass.trim==='')
{
setError(true)
}
else{

    setError(false)
    navigate('/home')

}
}





  return (
    <div>
      <h1 className='header'>SIGN IN</h1>
      <form className='user'>
        USERNAME <input type='text' onChange={readusername}/><br></br>
        PASSWORD <input type='password' onChange={readpassword}/><br></br>
        <button type="submit" onClick={readalldata}>LOG IN</button><br></br>
        {
            error && 'Error Detected'                                                               
        }
      </form>
    </div>
  )
}

export default Login
