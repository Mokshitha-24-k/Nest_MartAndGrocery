// src/components/common/HoverDropdown/HoverDropdown.jsx
import React from "react";
import "./Dropdown.css";
import { RiArrowDropDownLine } from "react-icons/ri";

const Dropdown = ({ label, options }) => {
  return (
    <div className="hover-dropdown">
      <span className="hover-label">
        {label} <span className="arrow"><RiArrowDropDownLine /></span>
      </span>
      <div className="hover-menu">
        {options.map((opt, i) => (
          <div className="hover-item" key={i}>
           
            <span>{opt}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
