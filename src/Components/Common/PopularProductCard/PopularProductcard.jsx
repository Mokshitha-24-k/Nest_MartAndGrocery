import React from "react";
import "./PopularProductCard.css";
import { FaEye, FaRandom, FaHeart, FaShoppingCart } from "react-icons/fa";

const PopularProductCard = ({
  discount,
  discountBG,
  image,
  category,
  title,
  rating,
  brand,
  price,
  oldPrice,
  onAddToCart,
}) => {
  return (
    <div className="product-card">
      <div
        className="discount-badge"
        style={{ backgroundColor: discountBG || "white" }}
      >
        {discount}
      </div>

      <div className="product-image">
        <img src={image} alt={title} />
        {/* <div className="action-icons">
          <FaEye />
          <FaRandom />
          <FaHeart />
        </div> */}
      </div>

      <div className="product-info">
        <p className="category">{category}</p>
        <h3 className="title">{title}</h3>

        <div className="rating">
          {"★".repeat(rating)}
          {"☆".repeat(5 - rating)}
          <span className="rating-count">({rating})</span>
        </div>

        <p className="brand">
          By <span>{brand}</span>
        </p>

        <div className="price-add-row">
          <div className="price">
            <span className="new-price">${price}</span>
            <span className="old-price">${oldPrice}</span>
          </div>
          <button className="add-btn" onClick={onAddToCart}>
            <FaShoppingCart /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularProductCard;
