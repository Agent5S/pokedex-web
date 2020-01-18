import React from "react";
import { Master } from "./Master";
import { Detail } from "./Detail";

export class Dex extends React.Component {
    constructor(props) {
        super(props);
    }

    renderDetail() {
        if (this.props.pokemon) {
            return (
                <Detail pokemon={this.props.pokemon} />
            );
        }
    }

    render() {
        return (
            <div>
                <Master changePokemon={this.props.changePokemon}/>
                {this.renderDetail()}
            </div>
        );
    }
}