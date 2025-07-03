import React from "react";
import ThreeItemCardBox from "./ThreeItemCardBox";
import Images from "../../../Assets/Images";
import "./FourCardSection.css"; 

const FourCardSection = () => {
  const products = [
    {
      image: Images.RedApple,
      title: "Fresh Red Apple",
      rating: 4,
      price: 22.5,
      oldPrice: 25.0,
    },
    {
      image: Images.Muffin,
      title: "Chocolate Muffins Pack",
      rating: 4.2,
      price: 18.9,
      oldPrice: 20.0,
    },
    {
      image: Images.Snaks,
      title: "Organic Veggie Snacks",
      rating: 3.8,
      price: 10.5,
      oldPrice: 12.0,
    },
    {
      image: Images.CustardApple,
      title: "Custard Apple 500g",
      rating: 4.5,
      price: 30.0,
      oldPrice: 32.5,
    },
    {
      image: Images.Coffee,
      title: "Organic Black Coffee",
      rating: 4.0,
      price: 12.75,
      oldPrice: 14.5,
    },
    {
      image: Images.Cream,
      title: "Whipped Cream Bottle",
      rating: 3.5,
      price: 9.95,
      oldPrice: 11.0,
    },
    {
      image: Images.Peach,
      title: "Fresh Peach Box",
      rating: 4.8,
      price: 27.25,
      oldPrice: 29.0,
    },
    {
      image: Images.Coconut,
      title: "Tender Coconut (2pc)",
      rating: 4.1,
      price: 20.0,
      oldPrice: 22.0,
    },
    {
      image: Images.Latte,
      title: "Latte Coffee Pack",
      rating: 4.3,
      price: 19.85,
      oldPrice: 21.0,
    },
    {
      image: Images.Kiwi,
      title: "Kiwi Fruit Pack",
      rating: 3.9,
      price: 16.75,
      oldPrice: 18.0,
    },
    {
      image: Images.Strawberry,
      title: "Fresh Strawberries",
      rating: 5.0,
      price: 28.0,
      oldPrice: 30.0,
    },
    {
      image: Images.Butter,
      title: "Salted Butter Block",
      rating: 4.4,
      price: 13.45,
      oldPrice: 15.0,
    },
  ];

  return (
    <div className="four-card-grid">
      <ThreeItemCardBox title="Top Rated" items={products.slice(0, 3)} />
      <ThreeItemCardBox title="Recently Added" items={products.slice(3, 6)} />
      <ThreeItemCardBox title="New Arrivals" items={products.slice(6, 9)} />
      <ThreeItemCardBox title="Trending Now" items={products.slice(9, 12)} />
    </div>
  );
};

export default FourCardSection;
