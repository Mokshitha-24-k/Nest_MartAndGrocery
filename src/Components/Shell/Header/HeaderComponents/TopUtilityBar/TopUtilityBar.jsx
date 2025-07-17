import React, { useState } from "react";
import { useEffect } from "react";
import "./TopUtilityBar.css";
import Dropdown from '../../../../Common/Dropdown/Dropdown'



const TopUtilityBar = () => {
  
  const LanguageOptions = [
    { label: "Eng" },
    { label: "Hin" },
    { label: "Tel" },
  ];
  
  const CurrencyOptions = [
    { label: "INR" },
    { label: "USD" },
    { label: "EUR" },
  ];

  return (
    <div className="top-utility-bar">
      <div className="links">
        <a href="/about">About us</a>
        <a href="">My Account</a>
        <a href="">Wishlist</a>
        <a href="">Order Tracking</a>
      </div>
      <div class="promo-text">
      <div className="scroll-content">
          <div>100% Secure delivery without contacting the courier</div>
          <div>Supper Value Deals - Save more with coupons</div>
          <div>Trendy 25silver jewelry, save up 35% off today</div>
        </div>
      </div>
      <div className="right-info">
  <span className="contact">Need help? Call: <b className="number">+1800900122</b></span>

  <div className="dropdown-links">
    <div className="dropdown-item">
      <Dropdown label="English" options={LanguageOptions} />
    </div>
    <div className="dropdown-item">
      <Dropdown label="INR" options={CurrencyOptions} />
    </div>
  </div>
</div>

    </div>
  );
};

export default TopUtilityBar;
