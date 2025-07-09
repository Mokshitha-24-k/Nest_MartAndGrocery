import React from 'react';
import { FaPaperPlane } from "react-icons/fa";
import FooterCard from '../../../Common/FooterCard/FooterCard';
import Images from "../../../../Assets/Images"


const Footer1 = () => {
  return (
    <div style={{marginTop:'20px'}}>
      <FooterCard
      image={Images.FooterBG}
      heading="Don’t Miss Amazing Grocery Deals"
      subText="Sign up for daily updates and offers"
      buttonLabel="Subscribe"
      overlayImage={Images.FooterOverlay}
      
    />
    </div>
  )
}

export default Footer1
