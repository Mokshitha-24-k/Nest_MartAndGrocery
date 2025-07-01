import React from 'react';
import FooterPromiseCard from './FooterPromiseCard';
import './Footer2.css'; 
import Images from '../../../../Assets/Images';

const promises = [
  {icon:Images.FooterIcon1, heading: "Best prices & offers", description: "Orders $50 or more" },
  { icon:Images.FooterIcon2,heading: "Free delivery", description: "24/7 amazing services" },
  { icon:Images.FooterIcon3,heading: "Great daily deal", description: "When you sign up" },
  { icon:Images.FooterIcon4,heading: "Wide assortment", description: "Mega Discounts" },
  { icon:Images.FooterIcon5,heading: "Easy returns", description: "Within 30 days" },
  { icon:Images.FooterIcon6,heading: "Safe delivery", description: "Secure & fast" },
];

const Footer2 = () => {
  return (
    <div className="footer2-container">
      {promises.map((item, index) => (
        <FooterPromiseCard
          key={index}
          icon={item.icon}
          heading={item.heading}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Footer2;
