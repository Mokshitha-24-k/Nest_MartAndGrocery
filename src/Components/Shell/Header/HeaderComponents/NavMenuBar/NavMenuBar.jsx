import React, { useState } from "react";
import "./NavMenuBar.css";
import Dropdown from "../../../../Common/Dropdown/Dropdown";
import { HiFire } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { CiGrid41 } from "react-icons/ci";

const DropdownMenus = [
  {
    label: "Browse All Categories",
    options: [
      { label: "Electronics", path: "/browse/electronics" },
      { label: "Fashion", path: "/browse/fashion" },
      { label: "Home", path: "/browse/home" },
      { label: "Beauty", path: "/browse/beauty" },
    ],
  },
  {
    label: "Home",
    options: [
      { label: "Home1", path: "/home1" },
      { label: "Home2", path: "/home2" },
      { label: "Home3", path: "/home3" },
    ],
  },
  {
    label: "About",
    options: [], 
  },
  {
    label: "Shop",
    options: [
      { label: "Our Story", path: "/shop/our-story" },
      { label: "Careers", path: "/shop/careers" },
      { label: "Store Locator", path: "/shop/locator" },
    ],
  },
  {
    label: "Vendors",
    options: [
      { label: "Top Vendors", path: "/vendors/top" },
      { label: "Vendor Login", path: "/vendors/login" },
    ],
  },
  {
    label: "Mega Menu",
    options: [
      { label: "Option 1", path: "/menu/option1" },
      { label: "Option 2", path: "/menu/option2" },
      { label: "Option 3", path: "/menu/option3" },
    ],
  },
  {
    label: "Blog",
    options: [],
  },
  {
    label: "Pages",
    options: [
      { label: "FAQ", path: "/faq" },
      { label: "Terms", path: "/terms" },
      { label: "Privacy", path: "/privacy" },
    ],
  },
  {
    label: "Contact",
    options: [], // Plain link
  },
];

const NavMenuBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="secondary-navbar">
      <div className="nav-row">
        
        <div className="Left">
          <div className="Browse-Dropdown">
            <CiGrid41 style={{ color: "white" }} />
            <Dropdown label="Browse All Categories" options={DropdownMenus[0].options} />
          </div>

          <span className="plain-link">
            <HiFire style={{ color: "#3cb371" }} /> Hot Deals
          </span>
        </div>

       
        <div className="Right large-screen-only">
          {DropdownMenus.slice(1).map((menu) =>
            menu.options.length > 0 ? (
              <Dropdown key={menu.label} label={menu.label} options={menu.options} />
            ) : (
              <span key={menu.label} className="plain-link">
                {menu.label}
              </span>
            )
          )}
        </div>

        
        <div className="hamburger-menu-icon" onClick={() => setShowMenu(!showMenu)}>
          <FaBars />
        </div>
      </div>

     
      <div className={`Right mobile-dropdown ${showMenu ? "show" : ""}`}>
        {DropdownMenus.slice(1).map((menu) =>
          menu.options.length > 0 ? (
            <Dropdown key={menu.label} label={menu.label} options={menu.options} />
          ) : (
            <span key={menu.label} className="plain-link">
              {menu.label}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default NavMenuBar;
