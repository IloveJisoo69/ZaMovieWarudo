import React from 'react';
import { useState } from 'react';
import Movies from '../components/Movies';
import '../css/app.css'

function HomeHeader () {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div>
            {/* <div className="bloc-tabs">
                <h1 className="moviestatus tabs active-tabs">Now Showing</h1>
                <h1 className="moviestatus tabs active-tabs">Coming Soon</h1>
            </div> */}
            <div className="bloc-tabs">
                <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
                >
                <h1 className="moviestatus">Now Showing</h1>
                </button>
                <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
                >
                <h1 className="moviestatus">Coming Soon</h1>
                </button>
            </div>
            <div className="content-tabs">
                <div
                className={toggleState === 1 ? "content  active-content" : "content"}
                >
                    <Movies/>
                </div>

                <div
                className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <Movies/>
                </div>
            </div>
        </div>
    );
}

export default HomeHeader;