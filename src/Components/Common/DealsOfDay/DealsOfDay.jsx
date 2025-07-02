import React from "react";
import DealsOfDayCard from "./DealsOfDayCard";
import Images from "../../../Assets/Images";
import "./DealsOfDayCard.css"


const deals = [
  {
    image: Images.DealsOfDay1,
    title: "Seeds of Change Organic Quinoa,Brown, & Red Rice",
    rating: 4.0,
    brand: "NestFood",
    price: 32.85,
    oldPrice: 33.8,
    onAddToCart: () => alert("Added Earbuds"),
  },
  {
    image: Images.DealsOfDay2,
    title: "Perdue Simply Smart Organics Gluten Free",
    rating: 4.0,
    brand: "Old El Paso",
    price: 24.85,
    oldPrice: 26.8,
    onAddToCart: () => alert("Added Watch"),
  },
  {
    image: Images.DealsOfDay3,
    title: "Signature Wood-Fired Mushroom ",
    rating: 3.0,
    brand: "Progresso",
    price: 12.85,
    oldPrice: 13.8,
    onAddToCart: () => alert("Added Watch"),
  },
  {
    image: Images.DealsOfDay4 ,
    title: "Simply Lemonade with Raspberry Juice",
    rating: 3.0,
    brand: "Yoplait",
    price: 15.85,
    oldPrice: 16.8,
    onAddToCart: () => alert("Added Watch"),
  },
];

const DealsOfDay = () => {
  return (
    <div className="deals-of-day-section">
      <h2 className="deals-of-day-heading">Deals of the Day</h2>

      <div className="deals-of-day-grid">
        {deals.map((item, index) => (
          <DealsOfDayCard
            key={index}
            image={item.image}
            title={item.title}
            rating={item.rating}
            brand={item.brand}
            price={item.price}
            oldPrice={item.oldPrice}
            onAddToCart={item.onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default DealsOfDay;
