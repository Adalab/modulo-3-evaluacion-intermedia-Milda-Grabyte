import React from 'react';

class Pokemon extends React.Component {
  render() {
    const pokeTypes = this.props.types.map((type, i) => {
      return <li key={i}>{type}</li>;
    });
    return (
      <article>
        <img className='pokemon-image' src={this.props.url} alt='pokemon'></img>
        <h2 className='pokemon-name'>{this.props.name}</h2>
        <ul className='pokemon-types'>
          {pokeTypes}
        </ul>
      </article>
    );
  }
}

export default Pokemon;
