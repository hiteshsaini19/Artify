import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Artify</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><NavLink to="/" exact="true" activeclassname="active">Home</NavLink></li>
                    <li><NavLink to="/about" activeclassname="active">About</NavLink></li>
                    <li><NavLink to="/exhibitions" activeclassname="active">Exhibitions</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
