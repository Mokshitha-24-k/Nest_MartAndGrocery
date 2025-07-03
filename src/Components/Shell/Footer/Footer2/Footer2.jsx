import React from 'react';
import FooterPromiseCard from './FooterPromiseCard';
import './Footer2.css';
import Images from '../../../../Assets/Images';

const promises = [
  {
    icon: Images.FooterIcon1,
    heading: "Best prices & offers",
    description: "Orders $50 or more",
    extra: "Find unbeatable deals across all categories.Seasonal promotions help you save every time.",
  },
  {
    icon: Images.FooterIcon2,
    heading: "Free delivery",
    description: "24/7 amazing services",
    extra: "No delivery charges on eligible orders.Enjoy fast and efficient service around the clock.",
  },
  {
    icon: Images.FooterIcon3,
    heading: "Great daily deal",
    description: "When you sign up",
    extra: "Exclusive member-only deals updated daily.Sign up and never miss limited-time offers.",
  },
  {
    icon: Images.FooterIcon4,
    heading: "Wide assortment",
    description: "Mega Discounts",
    extra: "From groceries to personal care, shop everything.Enjoy huge discounts on your everyday needs.",
  },
  {
    icon: Images.FooterIcon5,
    heading: "Easy returns",
    description: "Within 30 days",
    extra: "We make returns stress-free and quick.Get refunds or exchanges with no extra hassle.",
  },
  {
    icon: Images.FooterIcon6,
    heading: "Safe delivery",
    description: "Secure & fast",
    extra: "Your packages are securely packed and tracked.Experience reliable, contactless doorstep delivery.",
  },
];


const Footer2 = ({ variant = "home" }) => {
  return (
    <div className={`footer2-container ${variant}`}>
      {promises.map((item, index) => (
        <FooterPromiseCard
          key={index}
          icon={item.icon}
          heading={item.heading}
          description={item.description}
          variant={variant}
          extra={item.extra}
        />
      ))}
    </div>
  );
};

export default Footer2;
