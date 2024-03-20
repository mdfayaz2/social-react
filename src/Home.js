import React, { useContext } from 'react'
import { UserContext } from './App1'
import Feeds from "./Feeds";
import User from "./User";
import Albums from './Albums';
import Posts from './Posts';
import Todos from './Todos';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Home() {
  const {flag,setFlag, user}=useContext(UserContext);
  return (
   <>           
    <div>Hi {user.name}!</div>
    <div>
      <Router>
       <Link to="/">Feeds</Link> | <Link to="/posts">Posts</Link>  | <Link to="/todos">Todos</Link>  | <Link to="/albums">Albums</Link>
        <Routes>
            <Route path="/" element={<Feeds/>}></Route>
            <Route path="/posts"  element={<Posts/>}></Route>
            <Route path="/albums" element={<Albums/>}></Route>
            <Route path="/todos"  element={<Todos/>}></Route>
        </Routes>
      </Router>
    </div><br /> <br />
    <button  onClick={() => setFlag(() => 0)} >Logout</button>
   </>
  )
}
