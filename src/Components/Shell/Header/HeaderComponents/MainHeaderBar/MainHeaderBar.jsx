import React, { useState } from 'react';
import Images from "../../../../../Assets/Images";
import {
  FaBars,
  FaSearch
} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import './MainHeaderBar.css';
import Dropdown from '../../../../Common/Dropdown/Dropdown';
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

const MainHeaderBar = () => {
  const [showIcons, setShowIcons] = useState(false);
  const LocationOptions = ["Hyderabad", "Vijayawada", "Vizag", "Kurnool"];

  const toggleMenu = () => {
    setShowIcons(!showIcons);
  };

  return (
    <nav className="navbar">
      <div className="navbar-top-row">
        <div className="navbar-left">
          <img src={Images.Logo} alt="Logo" className="logo" />
        </div>

        <div className="navbar-center">
          <div className="search-wrapper">
            <input
              type="text"
              className="search-bar"
              placeholder="Search products..."
            />
            <FaSearch className="search-icon" />
          </div>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <FaBars />
        </div>

        <div className="navbar-right">
          <div className="nav-icon location-icon">
            <CiLocationOn />
            <Dropdown label="Location" options={LocationOptions} />
          </div>

          <div className="nav-icon">
          <IoMdHeartEmpty />
            <span className="badge">0</span>
            <span className="nav-label">Wishlist</span>
          </div>

          <div className="nav-icon">
          <BsCart3 />
            <span className="badge">2</span>
            <span className="nav-label">Cart</span>
          </div>

          <div className="nav-icon">
          <FaRegUser />
            <span className="nav-label">Account</span>
          </div>
        </div>
      </div>

      
      <div className={`navbar-right-mobile ${showIcons ? "show" : ""}`}>
        <div className="nav-icon location-icon">
          <CiLocationOn />
          <Dropdown label="Location" options={LocationOptions} />
        </div>
        <div className="nav-icon">
        <IoMdHeartEmpty />
          <span className="badge">0</span>
          <span className="nav-label">Wishlist</span>
        </div>
        <div className="nav-icon">
        <BsCart3 />
          <span className="badge">2</span>
          <span className="nav-label">Cart</span>
        </div>
        <div className="nav-icon">
        <FaRegUser />
          <span className="nav-label">Account</span>
        </div>
      </div>
    </nav>
  );
};

export default MainHeaderBar;
