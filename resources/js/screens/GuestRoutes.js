import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import GuestHome from '../components/GuestHome';
import GuestComingSoon from '../components/GuestComingSoon';
import { 
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

function GuestRoutes() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<GuestHome />} />
            <Route path="/coming_soon" element={<GuestComingSoon />} />
        </Routes>
      </Router>
  );
}

export default GuestRoutes;

// only main screens need this block of code 
if (document.getElementById('guestRoutes')) {
    ReactDOM.render(<GuestRoutes />, document.getElementById('guestRoutes'));
}
