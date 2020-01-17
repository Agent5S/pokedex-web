import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
    return (
        <div>
            <nav>
                Pokédex
                <ul>
                    <li>
                        <Link to="/">National</Link>
                    </li>
                    <li>
                        <Link to="/kanto">Kanto</Link>
                    </li>
                    <li>
                        <Link to="/johto">Johto</Link>
                    </li>
                    <li>
                        <Link to="/hoenn">Hoenn</Link>
                    </li>
                    <li>
                        <Link to="/sinnoh">Sinnoh</Link>
                    </li>
                    <li>
                        <Link to="/unova">Unova</Link>
                    </li>
                    <li>
                        <Link to="/kalos">Kalos</Link>
                    </li>
                    <li>
                        <Link to="/alola">Alola</Link>
                    </li>
                    <li>
                        <Link to="/galar">Galar</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}