import React from 'react';
import { TopBar } from './TopBar';

export class Detail extends React.Component {
    render() {
        const pokemon = this.props.pokemon;
        return (
            <div id={this.props.id} className="detail">
                <div>
                    {pokemon ? pokemon.getInformation('en') : ''}
                </div>
            </div>
        );
    }
}