import React from 'react';
import Pokemon from './Pokemon';
import propTypes from 'prop-types';
import '../styles/PokeList.scss'

class PokeList extends React.Component {
  render() {
    const pokeItems = this.props.data.map((pokemon) => {
      return (
        <li className='pokemon-item' key={pokemon.id}>
          <Pokemon name={pokemon.name} types={pokemon.types} url={pokemon.url} />
        </li>
      );
    });
    return (
      <div className='pokemon-collection'>
        <h1 className='pokemon-title'>Mi lista de Pokemon</h1>
        <ul className='pokemon-list'>{pokeItems}</ul>
      </div>
    );
  }
}

PokeList.propTypes = {
  name: propTypes.string,
  id: propTypes.number,
  types: propTypes.array,
  url: propTypes.string
};

export default PokeList;
