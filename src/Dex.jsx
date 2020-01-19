import React from "react";
import { Master } from "./Master";
import { Detail } from "./Detail";
import { TopBar } from "./TopBar";

export class Dex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            entries: [],
            pokemonEntry: null,
            pokemon: null
        }

        this.changeEntry = this.changeEntry.bind(this);
    }

    componentDidMount() {
        fetch('./pokemon.json')
        .then(res => res.json())
        .then(res => {
            const state = Object.assign({}, this.state);
            state.entries = res;

            this.setState(state);
        });
    }

    changeEntry(entry) {
        if (entry) {
            fetch(entry.pokemon_species.url)
            .then (res => res.json())
            .then (res => {
                res.getName = getName.bind(res);
                res.getInformation = getInformation.bind(res);
                const state = Object.assign({}, this.state);
                state.pokemonEntry = entry;
                state.pokemon = res;

                this.setState(state);
            });
            return;
        }
        const state = Object.assign({}, this.state);
        state.pokemonEntry = null;
        state.pokemon = null;

        this.setState(state);
    }

    renderDetail() {
        if (this.state.pokemon) {
            return (
                <Detail
                    id="app-detail"
                    pokemon={this.state.pokemon} />
            );
        }
    }

    render() {
        const entries = this.state.entries;
        const pokemon = this.state.pokemon;

        return (
            <div className="master-detail">
                <TopBar
                    id="app-top-bar"
                    changeEntry={this.changeEntry}
                    title={pokemon ? pokemon.getName('en') : ''} />
                <Master id="app-master" entries={entries} changeEntry={this.changeEntry}/>
                {this.renderDetail()}
            </div>
        );
    } 
}

function getName(language) {
    if (this) {
        for (const entry of this.names) {
            if (entry.language.name === language) {
                return entry.name;
            }
        }
    }
}

function getInformation(language) {
    if (this) {
        for (const entry of this.flavor_text_entries) {
            if (entry.language.name === language) {
                return entry.flavor_text;
            }
        }
    }
}