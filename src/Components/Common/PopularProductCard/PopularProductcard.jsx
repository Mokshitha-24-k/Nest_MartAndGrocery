import React from "react";
import "./PopularProductCard.css";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../AuthContext"; // use our context

const PopularProductCard = ({
  id,
  discount,
  discountBG,
  image,
  category,
  title,
  rating,
  brand,
  price,
  oldPrice,
  stockStatus,
  onAddToCart,
}) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (loading) {
      alert("Checking login status, please wait...");
      return;
    }

    if (!user) {
      alert("Please log in to add items to your cart.");
      navigate("/login");
      return;
    }

    const product = {
      id,
      discount,
      discountBG,
      image,
      category,
      title,
      rating,
      brand,
      price,
      oldPrice,
      stockStatus,
    };

    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <div className="product-card">
      <div className="discount-badge" style={{ backgroundColor: discountBG || "white" }}>
        {discount}
      </div>

      <div className="product-image">
        <img src={image} alt={title} />
      </div>

      <div className="product-info">
        <p className="category">{category}</p>
        <h3 className="title">{title}</h3>

        <div className="rating">
          {"★".repeat(rating)}{"☆".repeat(5 - rating)}
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

          <button className="add-btn" onClick={handleAddToCart}>
            <FaShoppingCart /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularProductCard;
