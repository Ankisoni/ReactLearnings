import React, { useEffect, useState } from 'react';
import { CardList } from './components/CardList/CardList.component';
//https://jsonplaceholder.typicode.com/users?_limit=3

function App() {
  const [monsters, setMonsters] = useState([] as any);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setMonsters(data as any);
      })
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <>
    <div className='container'>
      <div className='row'>
      <CardList monsters={monsters} />
      </div>
      </div>
    </>
  );
}

export default App;
