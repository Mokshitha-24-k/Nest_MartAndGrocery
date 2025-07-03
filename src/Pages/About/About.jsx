import React from "react";
import Welcome from "./Welcome/Welcome";
import Footer1 from "../../Components/Shell/Footer/Footer1/Footer1";
import Footer2 from "../../Components/Shell/Footer/Footer2/Footer2";
import "./About.css";
import Images from "../../Assets/Images";
import Info from "./Info/Info";
import {Box} from "@mui/material";
import Performance from "./Performance/Performance"
import HorizontalStatsBanner from "./HorizontalStasBanner/HorizontalStatsBanner";
import TeamInfo from "./Team/TeamInfo";

const About = () => {
  return (
    <div>
      <Box sx={{ width: '90%', mx: 'auto' }}>
      <Welcome />
      
      

      <Box sx={{ mt: 6 }}>
        <h2 className="wave-heading">
          What We Provide ?
          <img
            src={Images.Underline}
            alt="underline"
            className="wave-underline-img"
          />
        </h2>
       
        <Footer2 variant="about" />
      </Box>
      <Performance />
      <Info />
      <HorizontalStatsBanner />
      <TeamInfo />

      <Footer1 />
    </Box>
    </div>
  );
};

export default About;
