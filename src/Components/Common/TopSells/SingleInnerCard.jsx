import React from "react";
import "./SingleInnerCard.css";

const SingleInnerCard= ({ image, title, rating, price, oldPrice }) => {
  return (
    <div className="vcard">
      <img src={image} alt={title} className="vcard-image" />

      <div className="vcard-info">
        <p className="vcard-title">{title}</p>
        <div className="vcard-rating">
          {"★".repeat(rating)}{"☆".repeat(5 - rating)}
          <span className="vcard-rating-count">({rating.toFixed(1)})</span>
        </div>
        <div className="vcard-price">
          <span className="vcard-new">${price}</span>
          <span className="vcard-old">${oldPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleInnerCard;
