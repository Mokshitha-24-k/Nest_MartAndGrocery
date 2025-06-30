import React from 'react';
import './AddsCard.css';

const AddsCard = ({ image, text, onClick }) => {
  return (
    <div className="adds-card">
      <img src={image} alt={text} className="adds-card-img" />
      <div className="adds-card-content">
        <h3>{text}</h3>
        <button onClick={onClick}>Shop</button>
      </div>
    </div>
  );
};

export default AddsCard;
