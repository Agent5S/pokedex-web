import React from 'react';

export function ListElement(props) {
    return (
        <div onClick={() => props.pokemonChangeListener(props.name)}>
            <h2>{props.name}</h2>
        </div>
    );
}