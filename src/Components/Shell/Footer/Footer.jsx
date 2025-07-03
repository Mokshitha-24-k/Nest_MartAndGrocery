import React from "react";
import Footer1 from "./Footer1/Footer1";
import Footer2 from "./Footer2/Footer2";
import Footer3 from "./Footer3/Footer3";
import Footer4 from "./Footer4/Footer4";

const Footer = () => {
  return (
    <div>
      {/* <Footer1 /> */}
      {/* <Footer2 /> */}
      <Footer3 />
      <hr
        style={{
          border: "0.1px solid #BCE3C9",
          width: "90%",
          margin: "20px auto",
        }}
      />
      <Footer4 />
    </div>
  );
};

export default Footer;
