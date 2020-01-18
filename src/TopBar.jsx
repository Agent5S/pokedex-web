import React from 'react';
import { Link } from 'react-router-dom';

export function TopBar(props) {
    return (
        <div>
            <h1>{props.title}</h1>
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