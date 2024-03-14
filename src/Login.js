import React, { useContext, useState } from 'react'
import { UserContext } from './App1'
import Home from './Home';
import Register from './Register';


export default function Login() {
    const {flag, setFlag,user, setUser, users, setUsers }=useContext(UserContext);
  return (
    <>
    <div>Login</div>
    <input type='text' onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Enter Email"
              autoFocus></input><br/><br/>
    <input type='password' onChange={(e) =>
                setUser((prev) => ({ ...prev, pass: e.target.value }))
              } placeholder='Enter Password'></input><br/><br/>
    <button onClick={()=>setFlag((prev)=>2)}>Login</button>
    <button onClick={()=>setFlag((prev)=>1)}>Create Account</button>
    {flag===1 && (<Register />)}
    </> 
  )
}