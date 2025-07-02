import React from "react";
import "./Dropdown.css";
import { RiArrowDropDownLine } from "react-icons/ri";

const Dropdown = ({ label, options }) => {
  return (
    <div className="hover-dropdown">
      <span className="hover-label">
        {label} <span className="arrow"><RiArrowDropDownLine /></span>
      </span>

      {options.length > 0 && (
        <div className="hover-menu">
          {options.map((opt, i) => (
            <div className="hover-item" key={i}>
              <a href={opt.path}>{opt.label}</a> {/* ✅ plain HTML link */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
