import React from 'react';
import { Link } from 'react-router-dom';

export class TopBar extends React.Component {
    render() {
        return (
            <div id={this.props.id} className="top-bar">
                <button onClick={() => this.props.changeEntry(null)}>‹</button>
                <h1>{this.props.title}</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Pokédex</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}