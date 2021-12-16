import React from 'react';
import HomeHeader from '../headers/HomeHeader';
import GuestMovies from './GuestMovies';

const GuestHome = () => {
  return (
    <div>
      <HomeHeader tabNumber={1} />
      <GuestMovies/>
    </div>
  );
}

export default GuestHome;