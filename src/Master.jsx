import React from 'react';
import { ListElement } from './ListElement';

export class Master extends React.Component {
    constructor(props) {
        super(props);
    }

    pokemon = ['Bulbasaur', 'Charizard', 'Squirtle'];
    i = 0;
    elements = this.pokemon.map(
        pokemon => {
            this.i++;
            return <ListElement pokemonChangeListener={this.props.pokemonChangeListener} key={this.i} name={pokemon} />
        })

    render() {
        return (
            <div>
                {this.elements}
            </div>
        );
    }
}