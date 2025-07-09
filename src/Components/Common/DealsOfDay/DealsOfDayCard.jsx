import React from 'react';
import "./DealsOfDayCard.css";
import { FaShoppingCart } from "react-icons/fa";

const DealsOfDayCard = ({
  image,
  title,
  rating,
  brand,
  price,
  oldPrice,
  onAddToCart,
  timer 
}) => {
  return (
    <div className={`deals-of-day-card-container ${timer ? "with-timer" : ""}`}>
      <div className='deals-of-day-image-section'>
        <img src={image} alt={title} />
        {timer && (
          <div className="timer-overlay">
            <div className="timer-box">{timer.days}<br /><span>Days</span></div>
            <div className="timer-box">{timer.hours}<br /><span>Hours</span></div>
            <div className="timer-box">{timer.minutes}<br /><span>Mins</span></div>
            <div className="timer-box">{timer.seconds}<br /><span>Sec</span></div>
          </div>
        )}
      </div>

      <div className='deals-of-day-info-card'>
        <h3 className='deals-of-day-title'>{title}</h3>
        <div className="deals-of-day-rating">
          {"★".repeat(rating)}
          {"☆".repeat(5 - rating)}
          <span className="deals-of-day-rating-count">({rating})</span>
        </div>
        <p className="deals-of-day-brand">By <span>{brand}</span></p>
        <div className="deals-of-day-price-add-row">
          <div className="deals-of-day-price">
            <span className="deals-of-day-new-price">${price}</span>
            <span className="deals-of-day-old-price">${oldPrice}</span>
          </div>
          <button className="deals-of-day-add-btn" onClick={onAddToCart}>
            <FaShoppingCart /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default DealsOfDayCard;
