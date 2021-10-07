import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  
  constructor() {
    super()

    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);

    this.state = {
      pokemon: 0,
    }

  }

  async handleLeftClick() {
    await this.setState((prev) => ({
      pokemon: prev.pokemon - 1,
    }))
  }

  async handleRightClick() {
    await this.setState((prev) => ({
      pokemon: prev.pokemon + 1,
    }))
  }

  async handleArrows(e) {
    const pokeLength = this.props.pokemons.length;
    const isLeft = e.target.className === "left-button";

    // checks which button was pressed
    if (isLeft) {
      await this.setState((prev) => ({
        pokemon: prev.pokemon - 1,
      }))
    } else {
       await this.setState((prev) => ({
        pokemon: prev.pokemon + 1,
      }))
    }

    // when reaches beginning/end of array
    if (this.state.pokemon === -1) {
      await this.setState(() => ({
        pokemon: pokeLength - 1,
      }))
    } else if (this.state.pokemon === pokeLength) {
      await this.setState(() => ({
        pokemon: 0,
      }))
    }

    console.log(this.state.pokemon)
  }

    render() {
        return (
            <div className="pokedex">
              <button className="psychic">Psychic</button>
              <button className="left-button" onClick={ ((e) => this.handleArrows(e)) }>←</button>
              <div className="pokemons-container">
                {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)[this.state.pokemon]}
              </div>
              <button className="right-button" onClick={ ((e) => this.handleArrows(e)) }>→</button>
              <button className="fire">Fire</button>
            </div>
        );
    }
}

export default Pokedex;