import React, { useContext } from 'react'
import { UserContext } from './App1'
import Feeds from "./Feeds";
import Posts from "./Posts";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Home() {
  const {flag,setFlag, user}=useContext(UserContext);
  return (
   <>           
    <div>Hi {user.name}</div>
    <div>
      <Router>
        <Link to="/">Feeds</Link> | <Link to="/posts">Posts</Link>
        <Routes>
            <Route path="/posts" element={<Posts/>}></Route>
            <Route path="/" index element={<Feeds/>}></Route>
        </Routes>
      </Router>
    </div><br /> <br />
    <button  onClick={() => setFlag(() => 0)} >Logout</button>
   </>
  )
}
