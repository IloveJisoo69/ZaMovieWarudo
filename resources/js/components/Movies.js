import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import '../css/app.css'

const Movies = () => {

  const movies = [
    "/interstellar.jpg",
    "/joker.jpg",
    "/jumanji.jpg",
    "/maleficent.jpg",
    "/starwars.jpg",
  ];
  return (
    <>
    <h1 className="moviestatus">Now Showing</h1>
    <div className="movielist">
      <div className="movie-container">
          {movies.map(src => (
            <div
              key={src}
              className="card"
              style={{
                backgroundImage: `url(${src})`
              }}
            />
          ))}
      </div>
    </div>
    </>
  );
}

export default Movies;
