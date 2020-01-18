import React from "react";
import { Master } from "./Master";
import { Detail } from "./Detail";

export class Dex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Master pokemonChangeListener={this.props.pokemonChangeListener}/>
                <Detail name={this.props.pokemon}/>
            </div>
        );
    }
}