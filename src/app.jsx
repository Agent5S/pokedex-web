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

        this.changePokemon = this.onPokemonChange.bind(this);
    }

    onPokemonChange(name) {
        this.setState({ pokemon: name });
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
                        <TopBar title={this.state.pokemon ?? 'Pokédex'} />
                        <Dex pokemonChangeListener={this.changePokemon} pokemon={pokemon}/>
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