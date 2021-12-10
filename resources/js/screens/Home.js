import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import HomeHeader from '../headers/HomeHeader';
import Movies from '../components/Movies';

function Home() {
  return (
    <div>
      <HomeHeader/>
      {/* <Movies/> */}
    </div>
  );
}

export default Home;

// only main screens need this block of code 
if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}
