import React from 'react';

class Pokemon extends React.Component {
  render() {
    // Capitalizes first letter of a sting
    String.prototype.capitalize = function () {
      return this.charAt(0).toUpperCase() + this.slice(1);
    };

    const pokeTypes = this.props.types.map((type, i) => {
      return <li className='pokemon-type' key={i}>{type.toUpperCase()}</li>;
    });
    return (
      <article className='pokemon-card'>
        <div className='pokemon-image-container'>
          <img className='pokemon-image' src={this.props.url} alt='pokemon'></img>
        </div>
        <h2 className='pokemon-name'>{this.props.name.capitalize()}</h2>
        <ul className='pokemon-types'>{pokeTypes}</ul>
      </article>
    );
  }
}

export default Pokemon;
