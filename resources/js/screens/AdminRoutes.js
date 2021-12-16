import React from 'react';
import ReactDOM from 'react-dom';
import ManageMovies from '../components/admin/ManageMovies';
import AdminComingMovies from '../components/admin/AdminComingMovies';
import AdminHome from '../components/admin/AdminHome';
import { 
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';


function AdminRoutes() {
  return (
    <Router>
        <Routes>
            <Route path="/admin/home" element={<AdminHome />} />
            <Route path="/admin/manage" element={<ManageMovies />} />
            <Route path="/admin/coming_soon" element={<AdminComingMovies />} />
        </Routes>
    </Router>
  );
}

// only main screens need this block of code 
if (document.getElementById('adminRoutes')) {
    ReactDOM.render(<AdminRoutes />, document.getElementById('adminRoutes'));
}
