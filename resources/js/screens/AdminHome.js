import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header';
import Movies from '../components/Movies';

function AdminHome() {
  return (
    <div>
      <Header/>
      <Movies/>
    </div>
  );
}

export default AdminHome;

// only main screens need this block of code 
if (document.getElementById('adminHome')) {
    ReactDOM.render(<AdminHome />, document.getElementById('adminHome'));
}
