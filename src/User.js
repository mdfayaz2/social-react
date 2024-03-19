import React, { useEffect,useState } from "react";
export default function User() {
  const [data, setdata] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

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
      {data && data.map((elem) => <div key={elem.id}>{elem.name}</div>)}
    </div>
  );
}
