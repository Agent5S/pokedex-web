import React from 'react';
import { ListElement } from './ListElement';

export class Master extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: [],
            elements: []
        }
    }

    componentDidMount() {
        fetch('./pokemon.json')
        .then(res => res.json())
        .then(res => {
            const elements = res.map(
                pokemon => <ListElement
                    changePokemon={this.props.changePokemon}
                    key={pokemon.entry_number}
                    entry={pokemon}
                />
            );
            this.setState({
                pokemon: res,
                elements: elements
            });
        });
    }

    render() {
        return (
            <div>
                {this.state.elements}
            </div>
        );
    }
}