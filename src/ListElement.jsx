import React from 'react';
import { capitalizeFirstLetter } from "./util";

export function ListElement(props) {
    const number = props.entry.entry_number;
    const pokemon = props.entry.pokemon_species;
    return (
        <div onClick={() => props.changeEntry(props.entry)}>
            <h2>{number} - {capitalizeFirstLetter(pokemon.name)}</h2>
        </div>
    );
}