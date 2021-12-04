import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.png';
import './app.css';

const Header = () => {

    return (
        <div className = "Header">
            <img className="logo" src={logo}/>
        </div>
    );
}

export default Header;

if (document.getElementById('header')) {
    ReactDOM.render(<Header />, document.getElementById('header'));
}
