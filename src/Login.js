import React, { useContext, useState } from 'react'
import { UserContext } from './App1'
import Home from './Home';
import Register from './Register';
import './App.css'


export default function Login() {
    const {flag, setFlag,user, setUser, users}=useContext(UserContext);
    const [msg, setMsg]= useState();

    const validate = () => {
    const check = users.find(
      (elem) => elem.email === user.email && elem.pass === user.pass
    );
    if (check) {
      setUser((prev) => ({ ...prev, name: check.name }));
      setFlag(() => 2);
    } else setMsg(() => "Invalid email or password");
  };
  return (
    <div className='login'>
    <div >Login</div>
    <p>{msg}</p>
    <input type='text' onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Enter Email"
              autoFocus></input><br/><br/>
    <input type='password' onChange={(e) =>
                setUser((prev) => ({ ...prev, pass: e.target.value }))
              } placeholder='Enter Password'></input><br/><br/>
    <button onClick={validate}>Login</button>
    <button onClick={()=>setFlag((prev)=>1)}>Create Account</button>
    {flag===1 && (<Register />)}
    </div> 
  )
}

// import React, {useContext} from 'react'
// import {UserContext} from "./App1"
// import Home from "./Home";
// import Register from './Register'

// export default function Login() {
//     const {flag,setFlag} = useContext(UserContext);
//     if (flag == 1) {
//         <Home />
//     }
//     else if (flag == 2) {
//         <Register/>
//     }
//   return (
//    <>
//     <div>Login</div>
//     <button onClick={() => setFlag((prevState) => 1)}>Login</button>
//     <button onClick={() => setFlag((prevState) => 2)}>Create account</button>

//    </>
//   )
// }