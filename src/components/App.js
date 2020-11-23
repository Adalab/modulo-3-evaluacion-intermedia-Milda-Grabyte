import React from 'react';
import PokeList from './PokeList';
import pokedata from '../data/pokedata.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = pokedata;
  }
  render() {
    return (
    <PokeList data={this.state} />
    );
  }
}

export default App;
