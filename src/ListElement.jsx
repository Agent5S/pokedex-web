import React from 'react';

export function ListElement(props) {
    const number = props.entry.entry_number;
    const name = props.entry.pokemon_species.name;
    return (
        <div onClick={() => props.pokemonChangeListener(name)}>
            <h2>{number} - {name}</h2>
        </div>
    );
}