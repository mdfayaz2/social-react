import React, { useContext,useEffect,useState } from "react";
import {user, UserContext } from './App1'
export default function Todo() {
    const [data, setdata] = useState([]);
    const {user} = useContext(UserContext);
    const url = `https://jsonplaceholder.typicode.com/todos/?userId=${user.name}`;
  
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setdata(result);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      fetchData(url);
    }, []);
    return (
      <div>
      {data && data.map((elem) => 
        <div key={elem.id}>
         <p>Id: {elem.id}</p>  
         <p>Title: {elem.title} </p>
          <p>Status: 
          {elem.completed ? (
              <input type="checkbox" checked readOnly />
            ) : (
              <input type="checkbox" readOnly />
            )}
          </p>
        </div>)}
      </div>
    );
  }
  