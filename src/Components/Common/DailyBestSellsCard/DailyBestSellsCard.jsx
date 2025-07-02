import React from "react";
import "./DailyBestSells.css";
import { FaShoppingCart, FaStar } from "react-icons/fa";

const DailyBestSellsCard = ({
  discount,
  discountBG,
  image,
  brand,
  title,
  rating,
  price,
  oldPrice,
  sold,
  total,
  per
}) => {
  const percentage = (sold / total) * 100;

  return (
    <div className="product-card">
      <div className="discount-tag" style={{ backgroundColor: discountBG }}>
        {discount}
      </div>
      <div className="product-img">
        <img src={image} alt={title} />
      </div>
      <div className="product-details">
        <p className="brand">{brand}</p>
        <h4 className="title">{title}</h4>
        <div className="rating">
          {Array.from({ length: rating }, (_, i) => (
            <FaStar key={i} color="#ffc107" />
          ))}
        </div>
        <div className="price-row">
          <span className="new-price">${price}</span>
          <span className="old-price">${oldPrice}</span>
        </div>
        <div className="stock-bar">
          <div className="progress" style={{ width: `${percentage}%` }}></div>
        </div>
        <p className="stock-text">Sold: {sold}/{total}</p>
        <button className="add-to-cart">
          <FaShoppingCart /> Add To Cart
        </button>
      </div>
    </div>
  );
};

export default DailyBestSellsCard;
