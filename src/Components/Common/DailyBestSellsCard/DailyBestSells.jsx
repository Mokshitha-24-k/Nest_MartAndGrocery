import React, { useEffect, useState } from "react";
import "./DailyBestSells.css";
import DailyBestSellsCard from "./DailyBestSellsCard";
import AddsCard from "../AddsCard/AddsCard";
import { DailyBestSellsData } from "./DailyBestSellsData";
import Images from "../../../Assets/Images";

const DailyBestSells = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [showAll, setShowAll] = useState(false);

useEffect(() => {
    const updateCardCount = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setVisibleCount(1);          
      } else if (width <= 1024) {
        setVisibleCount(3);           
      } else {
        setVisibleCount(4);           
      }
    };
  
    updateCardCount();
    window.addEventListener("resize", updateCardCount);
    return () => window.removeEventListener("resize", updateCardCount);
  }, []);
  

  const displayedProducts = showAll
    ? DailyBestSellsData
    : DailyBestSellsData.slice(0, visibleCount);

  return (
    <div className="daily-best-sells-section">
      <div className="top-bar">
        <h2>Daily Best Sells</h2>
        <div className="tab-options">
          <span className="tab active">Featured</span>
          <span className="tab">Popular</span>
          <span className="tab">New added</span>
        </div>
      </div>

      <div className="cards-row">
        <div className="left-adds-card">
          <AddsCard
            image={Images.LeafBG}
            text="Bring nature into your home"
            onClick={() => alert("Shop Now")}
          />
        </div>

        <div className="product-cards">
          {displayedProducts.map((product, index) => (
            <DailyBestSellsCard key={index} {...product} />
          ))}
        </div>
      </div>




      {!showAll && DailyBestSellsData.length > visibleCount && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            onClick={() => setShowAll(true)}
            style={{
              backgroundColor: "#ffcc99",
              color: "black",
              padding: "8px 16px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
            }}
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default DailyBestSells;
