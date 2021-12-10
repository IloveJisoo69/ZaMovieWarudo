import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import HomeHeader from '../headers/HomeHeader';
import Movies from '../components/Movies';

function UserHome() {
  return (
    <div>
      <HomeHeader/>
      <Movies/>
    </div>
  );
}

export default UserHome;

// only main screens need this block of code 
if (document.getElementById('userHome')) {
    ReactDOM.render(<UserHome />, document.getElementById('userHome'));
}
