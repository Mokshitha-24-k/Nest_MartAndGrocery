import React from "react";
import SingleInnerCard from "./SingleInnerCard";
import "./ThreeItemCardBox.css";

const ThreeItemCardBox = ({ title, items }) => {
  return (
    <div className="three-item-wrapper">
      <h3 className="three-item-title">{title}</h3>
      <div className="three-item-box">
        {items.slice(0, 3).map((item, index) => (
          <SingleInnerCard  key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ThreeItemCardBox;
