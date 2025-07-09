import React from "react";
import DealsOfDayCard from "../../../../Components/Common/DealsOfDay/DealsOfDayCard";
import "../../../../Components/Common/DealsOfDay/DealsOfDayCard.css";
import DealsData from "../../../../Components/Common/DealsOfDay/DealsData";
import {Box} from "@mui/material";



const DealsOfDay = () => {
  return (
    
    <div className="deals-of-day-section">
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
            timer={item.timer}
          />
        ))}
      </div>
    </div>
  );
};

export default DealsOfDay;
