import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header';
import Movies from '../components/Movies';

function Home() {
  return (
    <div>
      <Header/>
      <Movies/>
    </div>
  );
}

export default Home;

// only main screens need this block of code 
if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}
