import React from "react";
import "./Dropdown.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

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
              <NavLink
                to={opt.path}
                className={({ isActive }) =>
                  isActive ? "dropdown-link active-link" : "dropdown-link"
                }
              >
                {opt.label}
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
