import React from 'react';
import './Footer2.css';

const FooterPromiseCard = ({ icon, heading, description, variant ,extra}) => {
  return (
    <div className={`Footer-Promise-Card ${variant}`}>
      <img src={icon} alt={heading} />
      <div className="Footer-Promise-Text">
        <h4>{heading}</h4>
        <p>{description}</p>
        {variant === 'about' && extra && (
  <p className="extra-about-text">
    {extra.split('.').map((line, index) => (
      <React.Fragment key={index}>
        {line.trim()}
        {line.trim() && '.'}
        <br />
      </React.Fragment>
    ))}
  </p>
)}
      </div>
    </div>
  );
};

export default FooterPromiseCard;
