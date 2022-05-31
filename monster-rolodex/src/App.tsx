import React, { Component, useEffect, useState } from 'react';
import { CardList } from './components/CardList/CardList.component';
import { SearchBox } from './components/SearchBox/SearchBox.component';
//https://jsonplaceholder.typicode.com/users?_limit=3

class App extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e: any) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField }: any = this.state;
    const filteredMonsters = monsters.filter((monster: any) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <div className='container'>
          <div className='row text-center'>
            <h1>Monsters Rolodex</h1>
          </div>
          <br></br>
          <div className='row text-center'>
            <SearchBox
              placeholder="Search Monsters"
              handleChange={this.handleChange}
            />
          </div>
          <br></br>
          <div className='row'>
            <CardList monsters={filteredMonsters} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
