import React from "react";

export function About(props) {
    const style = {
        marginLeft: '50ox'
    };

    return (
        <article>
            <header>
                <h1>Pokédex Web App</h1>
            </header>
            <p>
                This is an example web application. It consumes data from <a href="https://pokeapi.co">PokéAPI</a> to display the
                Pokémon's information. At this time the wep app only displays information of the first generation of Pokémon.
                Some limitations of the app are:
                <br/>
            </p>
            <ul>   
                <li>
                    It doesn't cache information for pokémon that have already been selected, so
                    each time you select a new pokémon it will send a new request to PokeAPI's server even if the pokemon had already
                    been selected.
                </li>
                <li>
                    It only displays the Pokémon's name and the in-game description, no other information is displayed.
                </li>
                <li>
                    It doesn't implement search.
                </li>
                <li>
                    Server side rendering has not been implemented.
                </li>
            </ul>
            <p>
                <br/>
                In terms of technical information the app implements routed navigation, and consumes data from PokéAPI's REST API, and it is responsive.
            </p>
        </article>
    );
}