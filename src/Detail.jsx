import React from 'react';

export class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: null
        }
    }

    componentDidMount() {
        fetch(this.props.pokemon.url)
        .then(res => res.json())
        .then(res => {
            this.setState({
                pokemon: res
            })
        });
    }

    getName() {
        const pokemon = this.state.pokemon;
        if (pokemon) {
            for (const entry of pokemon.names) {
                if (entry.language.name === 'en') {
                    return entry.name;
                }
            }
        }
    }

    getInformation() {
        const pokemon = this.state.pokemon;
        if (pokemon) {
            for (const entry of pokemon.flavor_text_entries) {
                if (entry.language.name === 'en') {
                    return entry.flavor_text;
                }
            }
        }
    }

    render() {
        return (
            <div>
                {this.getName()}
                <br/>
                {this.getInformation()}
            </div>
        );
    }
}