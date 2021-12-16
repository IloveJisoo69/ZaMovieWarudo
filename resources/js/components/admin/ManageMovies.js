import React, { useState } from 'react';
import '../../css/app.css';
import AdminHeader from '../../headers/AdminHeader';
import Movies from '../Movies';

const ManageMovies = () => {
  return (
    <div>
        <AdminHeader tabNumber={3} />
        <Movies nav="/admin/coming_soon" />
    </div>
  );
};

export default ManageMovies; 