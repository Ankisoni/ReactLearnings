import React, { Component, useEffect, useState } from 'react';
import { ContainerDiv, Title } from './App.style';
import { CardList } from './components/CardList/CardList.component';
import { SearchBox } from './components/SearchBox/SearchBox.component';

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
        <ContainerDiv>
        <div className='container'>
          <div className='row text-center'>
            <Title>Monsters Rolodex</Title>
          </div>
          <br></br>
          <div className='row text-center'>
            <SearchBox
              placeholder="Search Monsters"
              handleChange={this.handleChange}/>
          </div>
          <br></br>
          <div className='row'>
            <CardList monsters={filteredMonsters} />
          </div>
        </div>
        </ContainerDiv>
      
    );
  }
}

export default App;
