import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { TopBar } from './TopBar';
import { Dex } from './Dex';


class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/about'>
                        <TopBar title='About' />
                    </Route>
                    <Route path='/'>
                        <Dex />
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