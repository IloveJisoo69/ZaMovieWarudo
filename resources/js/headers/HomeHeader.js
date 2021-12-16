import React from 'react';
import { useState } from 'react';
import '../css/app.css';
import { Link } from 'react-router-dom';

function HomeHeader (props) {
    const [toggleState, setToggleState] = useState(props.tabNumber);

    return (
        <div>
            <div className="bloc-tabs">
                <Link to="/" 
                    className={toggleState === 1 ? " tabs moviestatus active-tabs" : "tabs moviestatus"} 
                    >Now Showing
                </Link>
                <Link to="/coming_soon" 
                    className={toggleState === 2 ? " tabs moviestatus active-tabs" : "tabs moviestatus"} 
                    >Coming Soon
                </Link>
            </div>
        </div>
    );
}

export default HomeHeader;