import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.png';
import '../css/app.css'

const Header = () => {

    return (
        <div className="Header">
            {/* <img className="logo" src={logo}/> */}
            <div>
                <ul className="nav">
                    <li>Now Showing</li>
                    <li>Upcoming Movies</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;

