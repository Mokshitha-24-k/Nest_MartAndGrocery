import React, { useEffect, useState } from "react";
import Images from "../../../../../Assets/Images";
import { FaBars, FaSearch } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import "./MainHeaderBar.css";
import Dropdown from "../../../../Common/Dropdown/Dropdown";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from "../../../../../Redux/cartActions";
import { auth } from "../../../../../Firebase"; 
import { onAuthStateChanged, signOut } from "firebase/auth";

const MainHeaderBar = () => {
  const [showIcons, setShowIcons] = useState(false);
  const [user, setUser] = useState(null); 
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.query);

  const LocationOptions = [
    { label: "Hyderabad" },
    { label: "Vijayawada" },
    { label: "Vizag" },
    { label: "Kurnool" },
  ];

  const toggleMenu = () => {
    setShowIcons(!showIcons);
  };

  const cartItems = useSelector((state) => state.cartItems);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);


  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  
  const accountOptions = user
    ? [{ label: "Logout", action: handleLogout },
      { label: "Profile", path:"/profile"}
    ]
    : [
        { label: "Login", path: "/login" },
        { label: "Sign Up", path: "/signup" },
      ];

  return (
    <nav className="navbar">
      <div className="navbar-top-row">
        <div className="navbar-left">
         <Link to="/home2">
  <img src={Images.Logo} alt="Logo" className="logo" />
</Link>
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
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <BsCart3 size={16} style={{ color: "#253D4E" }} />
              {totalItems > 0 && <span className="badge">{totalItems}</span>}
            </Link>
            <span className="nav-label">Cart</span>
          </div>

          <div className="account-nav-wrapper">
            <div className="account-icon">
              <FaRegUser style={{ fontSize: "14px", color: "#6B6A69" }} />
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
            <span className="badge">{totalItems}</span>
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
