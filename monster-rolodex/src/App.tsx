import React, { useEffect, useState } from 'react';
import { CardList } from './components/CardList/CardList.component';
import { SearchBox } from './components/SearchBox/SearchBox.component';
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

  const handleChange = (e: any) => {

    const filteredMonsters = monsters.filter((monster: any) =>
      monster.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setMonsters(filteredMonsters as any);
  };

  return (
    <>
      <div className='container'>
        <div className='row text-center'>
          <h1>Monsters Rolodex</h1>
        </div>
        <br></br>
        <div className='row text-center'>
          <SearchBox
            placeholder="Search Monsters"
            handleChange={handleChange}
          />
        </div>
        <br></br>
        <div className='row'>
          <CardList monsters={monsters} />
        </div>
      </div>
    </>
  );
}

export default App;
