import { useState, createContext, useContext } from "react";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
export const UserContext = createContext();
export default function App() {
  const [flag, setFlag] = useState(0);
  const [user, setUser] = useState({name:"", email: "", pass:""});
  const [users, setUsers] = useState([]);
  
 
  return (
    <>
      <UserContext.Provider value={{ user, setUser, flag, setFlag, users, setUsers } }>
       
        {flag==0||flag==1?<Login/>:<Home/>}
     
      </UserContext.Provider>
    </>
  );
}