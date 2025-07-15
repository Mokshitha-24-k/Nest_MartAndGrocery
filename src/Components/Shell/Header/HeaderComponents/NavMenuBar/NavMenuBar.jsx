import React, { useState } from "react";
import "./NavMenuBar.css";
import Dropdown from "../../../../Common/Dropdown/Dropdown";
import { HiFire } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { CiGrid41 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

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
      { label: "Home with SideBar", path: "/home1" },
      { label: "Home", path: "/home2" },
      // { label: "Home3", path: "/home3" },
    ],
  },
  {
    label: "About",
    options: [],
  },
  {
    label: "Shop",
    options: [
      {
        label: "Shop with right bar",
        path: "shop/ShopGridRightSidebar",
      },
      {
        label: "Shop with left bar",
        path: "shop/ShhpGridLeftSidebar",
      },
      { label: "List with right bar", path: "/shop/ListRightSiderber" },
      { label: "List with left bar", path: "/shop/ListLeftSiderber" },
      { label: "Shop-fullwide", path: "/shop/ShopFullwide" },
    ],
  },
  // {
  //   label: "Vendors",
  //   options: [
  //     { label: "Top Vendors", path: "/vendors/top" },
  //     { label: "Vendor Login", path: "/vendors/login" },
  //   ],
  // },
  // {
  //   label: "Mega Menu",
  //   options: [
  //     { label: "Option 1", path: "/menu/option1" },
  //     { label: "Option 2", path: "/menu/option2" },
  //     { label: "Option 3", path: "/menu/option3" },
  //   ],
  // },
  {
    label: "Blog",
    options: [
      { label: "Blog", path: "/Blog/Blog" },
      { label: "Blog Details", path: "/Blog/BlogDetails" },
    ],
  },
  {
    label: "Pages",
    options: [
      { label: "About us", path: "/about" },
      { label: "Contact us", path: "/contact" },
    ],
  },
  {
    label: "Contact",
    options: [],
  },
];

const NavMenuBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const renderMenuItem = (menu) =>
    menu.options.length > 0 ? (
      <Dropdown key={menu.label} label={menu.label} options={menu.options} />
    ) : (
      <NavLink
        to={`/${menu.label.toLowerCase().replace(/\s+/g, "-")}`}
        className={({ isActive }) =>
          isActive ? "plain-link active-link" : "plain-link"
        }
      >
        {menu.label}
      </NavLink>
    );

  return (
    <div className="secondary-navbar">
      <div className="nav-row">
        <div className="Left">
          <div className="Browse-Dropdown">
            <CiGrid41 style={{ color: "white" }} />
            <Dropdown
              label="Browse All Categories"
              options={DropdownMenus[0].options}
            />
          </div>

          <span className="plain-link">
            <HiFire style={{ color: "#3cb371" }} /> Hot Deals
          </span>
        </div>
        <div className="Right large-screen-only">
          {DropdownMenus.slice(1).map((menu) => renderMenuItem(menu))}
        </div>
        <div
          className="hamburger-menu-icon"
          onClick={() => setShowMenu(!showMenu)}
        >
          <FaBars />
        </div>
      </div>
      <div className={`Right mobile-dropdown ${showMenu ? "show" : ""}`}>
        {DropdownMenus.slice(1).map((menu) => renderMenuItem(menu))}
      </div>
    </div>
  );
};

export default NavMenuBar;
