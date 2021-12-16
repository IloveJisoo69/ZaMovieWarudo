import React from 'react';
import '../../css/app.css';
import AdminHeader from '../../headers/AdminHeader';
import Movies from '../Movies';

const AdminComingMovies = () => {
  return (
    <div>
        <AdminHeader tabNumber={2} />
        <Movies nav="/admin/home" />
    </div>
  );
};

export default AdminComingMovies; 