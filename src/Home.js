import React, { useContext } from 'react'
import { UserContext } from './App1'

export default function Home() {
  const {flag,setFlag}=useContext(UserContext);
  return (
   <>           
     <div>Home</div>
    <button  onClick={() => setFlag(() => 0)} >Logout</button>
   </>
  )
}