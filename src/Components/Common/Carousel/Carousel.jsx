import React from 'react';
import './Carousel.css';

const ReusableCarousel = ({ slides }) => {
  return (
    <div className="custom-carousel">
      <div className="carousel-wrapper">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === 0 ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="carousel-overlay">
              <h2>{slide.heading}</h2>
              <p>{slide.subText}</p>
              <div className="email-input-group">
                <input type="email" placeholder="Your email address" />
                <button>{slide.buttonLabel}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReusableCarousel;
