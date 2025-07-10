import React from "react";
import "./PopularProductCard.css";
import { FaShoppingCart } from "react-icons/fa";
import { addToCart } from "../../../Redux/cartActions";
import { useDispatch } from "react-redux";

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
  stockStatus = "In Stock", // Add default if missing
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
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

    dispatch(addToCart(product));
  };

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

          <button
            className="add-btn"
            // onClick={handleAddToCart}
            onClick={() => {
              handleAddToCart();
              alert("Item added to cart!");
            }}
            
            disabled={stockStatus === "Out of Stock"}
          >
            <FaShoppingCart /> {stockStatus === "Out of Stock" ? "Out of Stock" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularProductCard;
