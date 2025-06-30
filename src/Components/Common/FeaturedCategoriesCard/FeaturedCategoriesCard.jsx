import React from 'react'
import "./FeaturedCategoriesCard.css"
const FeaturedCategoriesCard = ({ image, title, description , bgcolor }) => {
    return (
      <div className="simple-card" 
      style={{ backgroundColor: bgcolor|| '#fff' }}
    >
        <img src={image} alt={title} className="card-image" />
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    );
  };

export default FeaturedCategoriesCard
