import React, { useState } from 'react';
import './app.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Showing = () => {
  const movies = [
    {image:"/interstellar.jpg"},
    {image:"/joker.jpg"},
    {image:"/jumanji.jpg"},
    {image:"/maleficent.jpg"},
    {image:"/starwars.jpg"},
  ];
  
  const [current, setCurrent] = useState(0);
  const length = movies.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const moveDot = index => {
    setCurrent(index);
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {movies.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='movieimage' />
            )}
          </div>
        );
      })}
      <div className="container-dots">
        {Array.from({length: movies.length}).map((item, index) => (
            <div 
                onClick={() => moveDot(index)}
                className={index === current ? "dot active" : "dot"}
            ></div>
        ))}
       </div>
    </section>
  );
};

export default Showing;