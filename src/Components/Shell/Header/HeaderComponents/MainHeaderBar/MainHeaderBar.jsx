import React,{useState} from 'react';
import Images from "../../../../../Assets/Images";
import { FaHeart, FaShoppingCart, FaUser, FaExchangeAlt, FaBars } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import './MainHeaderBar.css';
import Dropdown from '../../../../Common/Dropdown/Dropdown'

const MainHeaderBar = () => {
    const [showIcons, setShowIcons] = useState(false);
    const LocationOptions=["Hyderabad", "Vijawada","Vizag","Kurnool"]

    const toggleMenu = () => {
        setShowIcons(!showIcons);
      };
  return (
    <nav className="navbar">
    <div className="navbar-left">
      <img src={Images.Logo} alt="Logo" className="logo" />
    </div>

    <div className="navbar-center">
      <input
        type="text"
        className="search-bar"
        placeholder="Search products..."
      />
      <button className="search-btn">Search</button>
    </div>

    <div className="hamburger" onClick={toggleMenu}>
      <FaBars />
    </div>
    

    <div className={`navbar-right ${showIcons ? "show" : ""}`}>
    <div>
    <CiLocationOn />
    <Dropdown label="Location" options={LocationOptions} />
    </div>
      <div className="nav-icon">
        <FaHeart />
        <span className="badge">0</span>
        <span className="nav-label">Wishlist</span>
      </div>
      <div className="nav-icon">
        <FaShoppingCart />
        <span className="badge">2</span>
        <span className="nav-label">Cart</span>
      </div>
      <div className="nav-icon">
        <FaUser />
        <span className="nav-label">Account</span>
      </div>
    </div>
  </nav>
  )
}

export default MainHeaderBar
