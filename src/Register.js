import React, { useContext } from 'react'
import { UserContext } from './App1'
import './Register.css'

export default function Register() {
    const {flag,setFlag,user, setUser,setUsers}=useContext(UserContext);
    const newUser = () =>{
        setUsers((prev) => [...prev, user]);
        setFlag(() => 2);
    }
    
  return (
    <>
        <div className='Register-model'>
            <div className='Register-model-content'>
                <div className="Rigister-header">
                <div className="Register-signup-title">Sign Up</div>
                <div onClick={() => setFlag(() => 0)} className="close">&times;</div>
            </div>
                <input type='text' onChange={(e) =>
              setUser((prev) => ({ ...prev, name: e.target.value }))
            } placeholder='Enter Username'></input><br/><br/>
                <input type='email'  onChange={(e) =>
              setUser((prev) => ({ ...prev, email: e.target.value }))
            } placeholder='Enter Email'></input><br/><br/>
                <input type='password'
            onChange={(e) =>
              setUser((prev) => ({ ...prev, pass: e.target.value }))
            } placeholder=' Password'></input><br/><br/>
                <button onClick={newUser}>Submit</button>
            </div>
        </div>
    </>
  )
}

// import React from 'react'
// import  {useContext} from 'react'
// import {UserContext} from "./App1"
// import Home from './Home';

// export default function Register() {
//     const {flag,setFlag} = useContext(UserContext);
//   return (
//    <>
//      <div>Register</div>
//     <button onClick={() => setFlag((prevState) => 1)}>Create account</button>
//    </>
//   )
// }