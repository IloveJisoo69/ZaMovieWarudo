import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './app.css';

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
    <h1 class="moviestatus">Now Showing</h1>
    <div class="movielist">
    <div class="container">
        {movies.map(src => (
          <div
            key={src}
            class="card"
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

if (document.getElementById('movies')) {
    ReactDOM.render(<Movies />, document.getElementById('movies'));
}
