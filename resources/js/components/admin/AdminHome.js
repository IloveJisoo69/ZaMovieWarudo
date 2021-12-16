import React from 'react';
import AdminHeader from '../../headers/AdminHeader';
import Movies from '../Movies';

const AdminHome = () => {
  return (
    <div>
      <AdminHeader tabNumber={1} />
      <Movies nav="/admin/manage" />
    </div>
  );
}

export default AdminHome;