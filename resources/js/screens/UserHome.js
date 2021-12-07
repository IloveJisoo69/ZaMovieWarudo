import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header';
import Movies from '../components/Movies';

function UserHome() {
  return (
    <div>
      <Header/>
      <Movies/>
    </div>
  );
}

export default UserHome;

// only main screens need this block of code 
if (document.getElementById('userHome')) {
    ReactDOM.render(<UserHome />, document.getElementById('userHome'));
}
