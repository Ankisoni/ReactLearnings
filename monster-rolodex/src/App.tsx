import React, { useEffect, useState } from 'react';


function App() {
  const [users, setUsers] = useState([null]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data);
        console.log(data);
      })
  }
  
  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div><h1>Hello World!!</h1></div>
  );
}

export default App;
