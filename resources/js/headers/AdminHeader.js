import React, { useState } from 'react';
import '../css/app.css'
import { 
    Link
} from 'react-router-dom';


function AdminHeader (props) {
    const [toggleState, setToggleState] = useState(props.tabNumber);

    return (
        <div>
            <div className="bloc-tabs">
                <Link to="/admin/home" 
                    className={toggleState === 1 ? " tabs moviestatus active-tabs" : "tabs moviestatus"} 
                    >Now Showing
                </Link>
                <Link to="/admin/coming_soon" 
                    className={toggleState === 2 ? " tabs moviestatus active-tabs" : "tabs moviestatus"} 
                    >Coming Soon
                </Link>
                <Link to="/admin/manage" 
                    className={toggleState === 3 ? " tabs moviestatus active-tabs" : "tabs moviestatus"} 
                    >Manage Movies
                </Link>
            </div>
        </div>
    );
}

export default AdminHeader;