import React from "react";
import DealsOfDayCard from "./DealsOfDayCard";
import "./DealsOfDayCard.css";
import DealsData from "./DealsData"



const DealsOfDay = () => {
  return (
    <div className="deals-of-day-section" id="dealsofday">
      <h2 className="deals-of-day-heading">Deals of the Day</h2>

      <div className="deals-of-day-grid">
        {DealsData.map((item, index) => (
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
