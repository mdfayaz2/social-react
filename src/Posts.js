import React, { useContext,useEffect,useState } from "react";
import {user, UserContext } from './App1'

export default function Posts() {
  const [data, setdata] = useState([]);
  const {user} = useContext(UserContext);
  const url = `https://jsonplaceholder.typicode.com/posts/?userId=${user.name}`;

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
       <p>Id: {elem.userId}</p>  
       <p>Title: {elem.title} </p>
        <p>Post: {elem.body}</p>
      </div>)}
    </div>
  );
}
