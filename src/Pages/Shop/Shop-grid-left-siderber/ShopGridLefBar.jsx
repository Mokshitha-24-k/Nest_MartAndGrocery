import React from "react";
import ShopGridLayout from "../ShopGridLayout";
import Footer1 from "../../../Components/Shell/Footer/Footer1/Footer1"; 

const ShopGridLeftBar = () => {
  return (
    <>
      <ShopGridLayout sidebarPosition="left" />
      <Footer1 />
    </>
  );
};

export default ShopGridLeftBar;
