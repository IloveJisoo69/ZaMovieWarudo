import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.png';
import './app.css';

const Header = () => {

    return (
        <div class = "Header">
            <img class="logo" src={logo}/>
            <div>
                <ul class = "nav">
                    <li>Now Showing</li>
                    <li>Upcoming Movies</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;

if (document.getElementById('header')) {
    ReactDOM.render(<Header />, document.getElementById('header'));
}
