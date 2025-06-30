import React, { useState } from "react";
import "./NavMenuBar.css";
import Dropdown from "../../../../Common/Dropdown/Dropdown";
import { HiFire } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { CiGrid41 } from "react-icons/ci";

const NavMenuBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const BrowseOptions = ["Electronics", "Fashion", "Home", "Beauty"];
  const HomeOptions = [];
  const shopOptions = ["Our Story", "Careers", "Store Locator"];
  const vendorOptions = ["Top Vendors", "Vendor Login"];
  const MenuOptions = ["Option 1", "Option 2", "Option 3"];
  const BlogOptions = [];
  const PageOptions = ["FAQ", "Terms", "Privacy"];

  return (
    <div className="secondary-navbar">
      <div className="nav-row">
        <div className="Left">
          <div className="Browse-Dropdown">
          <CiGrid41 style={{ color: "white" }} />
            <Dropdown label="Browse All Categories" options={BrowseOptions} />
          </div>
          <span className="plain-link">
            <HiFire style={{ color: "#3cb371" }} /> Hot Deals
          </span>
        </div>

      
        <div className="Right large-screen-only">
          <Dropdown label="Home" options={HomeOptions} />
          <span className="plain-link">About</span>
          <Dropdown label="Shop" options={shopOptions} />
          <Dropdown label="Vendors" options={vendorOptions} />
          <Dropdown label="Mega Menu" options={MenuOptions} />
          <Dropdown label="Blog" options={BlogOptions} />
          <Dropdown label="Pages" options={PageOptions} />
          <span className="plain-link">Contact</span>
        </div>

        
        <div className="hamburger-menu-icon" onClick={() => setShowMenu(!showMenu)}>
          <FaBars />
        </div>
      </div>

    
      <div className={`Right mobile-dropdown ${showMenu ? "show" : ""}`}>
        <Dropdown label="Home" options={HomeOptions} />
        <span className="plain-link">About</span>
        <Dropdown label="Shop" options={shopOptions} />
        <Dropdown label="Vendors" options={vendorOptions} />
        <Dropdown label="Mega Menu" options={MenuOptions} />
        <Dropdown label="Blog" options={BlogOptions} />
        <Dropdown label="Pages" options={PageOptions} />
        <span className="plain-link">Contact</span>
      </div>
    </div>
  );
};

export default NavMenuBar;
