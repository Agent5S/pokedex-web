import React from 'react';

export class Detail extends React.Component {
    render() {
        return (
            <div>
                {this.props.pokemon.name}
            </div>
        );
    }
}