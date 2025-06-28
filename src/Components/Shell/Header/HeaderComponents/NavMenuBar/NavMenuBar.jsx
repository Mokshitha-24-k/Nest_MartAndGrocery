import React from "react";
import "./NavMenuBar.css";
import Dropdown from "../../../../Common/Dropdown/Dropdown";
import { HiFire } from "react-icons/hi";

const NavMenuBar = () => {
  const filterOptions = ["All", "Men", "Women", "Kids"];
  const navDropdowns = {
    "Browse All Categories": ["Electronics", "Fashion", "Home", "Beauty"],
    "Home": [],
    "About Shop": [],
    "Vendors": ["Top Vendors", "Vendor Login"],
    "Mega Menu": ["Option 1", "Option 2", "Option 3"],
    "Blog": [],
    "Pages": ["FAQ", "Terms", "Privacy"],
    "Contact": []
  };

  return (
    <div className="secondary-navbar">
      
     
      <span className="plain-link"> <HiFire />  Today's Deals</span>

      {Object.entries(navDropdowns).map(([label, options], i) => (
        <Dropdown key={i} label={label} options={options} />
      ))}
    </div>
  );
};

export default NavMenuBar;
