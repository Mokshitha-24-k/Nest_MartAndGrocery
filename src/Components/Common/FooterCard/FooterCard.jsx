import React from 'react';
import './FooterCard.css'; // Make sure this is imported
import { PiTelegramLogoThin } from "react-icons/pi";

const FooterCard = ({ image, heading, subText, buttonLabel, overlayImage }) => {
  return (
    <div
      className="Footer-Card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="Footer-content">
        <h1>{heading}</h1>
        <p>{subText}</p>
        <div className="subscribe-bar">
          <div className="input-wrapper">
            <PiTelegramLogoThin className="icon" />
            <input type="email" placeholder="Your email address" />
          </div>
          <button>{buttonLabel}</button>
        </div>
      </div>
      {overlayImage && (
        <img src={overlayImage} alt="Promo" className="Footer-image-right" />
      )}
    </div>
  );
};

export default FooterCard;
