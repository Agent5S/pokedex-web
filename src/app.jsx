import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from './NavBar';
import Display from './Display';

class App extends React.Component {
    render() {
        return (
            <Router>
                <NavBar />
                <Display />
            </Router>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);