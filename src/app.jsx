import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { TopBar } from './TopBar';
import { Dex } from './Dex';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {
            pokemon: null
        }

        this.changePokemon = this.changePokemon.bind(this);
        this.clearPokemon = this.clearPokemon.bind(this);
    }

    changePokemon(pokemon) {
        this.setState({ pokemon: pokemon });
    }

    clearPokemon() {
        this.setState({ pokemon: null })
    }

    render() {
        const pokemon = this.state.pokemon;

        return (
            <Router>
                <Switch>
                    <Route path='/about'>
                        <TopBar title='About' />
                    </Route>
                    <Route path='/'>
                        <TopBar clearPokemon={this.clearPokemon}  title={pokemon ? pokemon.name : 'Pokédex'} />
                        <Dex changePokemon={this.changePokemon} pokemon={pokemon}/>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);