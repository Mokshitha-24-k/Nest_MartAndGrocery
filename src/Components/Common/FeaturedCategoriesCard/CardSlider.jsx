import React, { useRef } from 'react';
import './CardSlider.css';
import FeaturedCategoriesCard from './FeaturedCategoriesCard';

const CardSlider = ({ items }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 220;

    if (!container) return;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const currentScrollLeft = container.scrollLeft;

    if (direction === 'right') {
      if (currentScrollLeft + scrollAmount >= maxScrollLeft) {
        
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    } else {
      if (currentScrollLeft <= 0) {
        
        container.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="featured-section">
      
      <div className="section-header-inline">
        <div className="title-and-links">
          <h2>Featured Categories</h2>
          <div className="links-inline">
            <a href="">Milk & Bread</a>
            <a href="">Pet Food</a>
            <a href="">Vegetables</a>
            <a href="">Coffee & Tea</a>
          </div>
        </div>
        <div className="right-controls">
          <button className="arrow-btn" onClick={() => scroll('left')}>&#8592;</button>
          <button className="arrow-btn" onClick={() => scroll('right')}>&#8594;</button>
        </div>
      </div>

     
      <div className="card-slider-wrapper" ref={scrollRef}>
        {items.map((item, index) => (
          <FeaturedCategoriesCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            bgcolor={item.bgcolor}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
