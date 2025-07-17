import React from "react";
import "./Dropdown.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Dropdown = ({ label, options }) => {
  const navigate = useNavigate();

  return (
    <div className="hover-dropdown">
      <span className="hover-label">
        {label} <span className="arrow"><RiArrowDropDownLine /></span>
      </span>

      {options.length > 0 && (
        <div className="hover-menu">
          {options.map((opt, i) => (
            <div
              className="hover-item"
              key={i}
              onClick={() => {
                if (opt.action) {
                  opt.action(); 
                } else if (opt.path) {
                  navigate(opt.path); 
                }
              }}
            >
              <span className="dropdown-link">{opt.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
