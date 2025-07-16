import React, { useState } from "react";
import Images from "../../../../../Assets/Images";
import { FaBars, FaSearch } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import "./MainHeaderBar.css";
import Dropdown from "../../../../Common/Dropdown/Dropdown";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from "../../../../../Redux/cartActions"


const MainHeaderBar = () => {
  const [showIcons, setShowIcons] = useState(false);
  const LocationOptions = ["Hyderabad", "Vijayawada", "Vizag", "Kurnool"];
  const accountOptions = [
    { label: "Login", path: "/login" },
    { label: "Sign Up", path: "/signup" }
  ];

  const dispatch = useDispatch();
const searchQuery = useSelector((state) => state.query); 


  const toggleMenu = () => {
    setShowIcons(!showIcons);
  };

  const cartItems = useSelector((state) => state.cartItems); 
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

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
  value={searchQuery}
  onChange={(e) => dispatch(setSearchQuery(e.target.value))}
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
            <div>
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <BsCart3 size={16} style={{ color: "#253D4E" }} />
              {totalItems > 0 && <span className="badge">{totalItems}</span>} </Link></div>
              <span className="nav-label">Cart</span>
           
            
          </div>

          <div className="account-nav-wrapper">
      <div className="account-icon">
        <FaRegUser style={{ fontSize: "14px",  color: "#6B6A69"  }}/>
      </div>
      <Dropdown
        label={<span className="account-label">Account</span>}
        options={accountOptions}
      />
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
          <Link to="/cart">
            <span className="badge">2</span>
            <span className="nav-label">Cart</span>
          </Link>
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
