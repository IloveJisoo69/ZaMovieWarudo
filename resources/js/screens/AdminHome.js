import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import HomeHeader from '../headers/HomeHeader';
import Movies from '../components/Movies';

function AdminHome() {
  return (
    <div>
      <HomeHeader/>
      <Movies/>
    </div>
  );
}

export default AdminHome;

// only main screens need this block of code 
if (document.getElementById('adminHome')) {
    ReactDOM.render(<AdminHome />, document.getElementById('adminHome'));
}
