import React from "react";
import ShopGridLayout from "../ShopGridLayout";
import Footer1 from "../../../Components/Shell/Footer/Footer1/Footer1"; 

const ShopGridRightBar = () => {
  return (
    <div>
      <ShopGridLayout sidebarPosition="right" />
      <Footer1 />
    </div>
  );
};

export default ShopGridRightBar;
