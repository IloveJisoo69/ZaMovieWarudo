import React, { useState } from 'react';
import '../css/app.css';
import GuestMovies from './GuestMovies';
import HomeHeader from '../headers/HomeHeader';

const ComingMovies = () => {
  return (
    <div>
        <HomeHeader tabNumber={2} />
        <GuestMovies />
    </div>
  );
};

export default ComingMovies; 