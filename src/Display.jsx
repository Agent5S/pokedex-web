import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Dex } from './Dex';

export default function Display(props) {
    return (
        <div>
            <Switch>
                <Route path="/galar">
                    <Dex name="Galar Pokedex" />
                </Route>
                <Route path="/Alola">
                    <Dex name="Alola Pokedex" />
                </Route>
                <Route path="/Kalos">
                    <Dex name="Kalos Pokedex" />
                </Route>
                <Route path="/Unova">
                    <Dex name="Unova Pokedex" />
                </Route>
                <Route path="/Sinnoh">
                    <Dex name="Sinnoh Pokedex" />
                </Route>
                <Route path="/Hoenn">
                    <Dex name="Hoenn Pokedex" />
                </Route>
                <Route path="/Johto">
                    <Dex name="Johto Pokedex" />
                </Route>
                <Route path="/Kanto">
                    <Dex name="Kanto Pokedex" />
                </Route>
                <Route path="/">
                    <Dex name="National Pokedex" />
                </Route>
            </Switch>
        </div>
    );
}