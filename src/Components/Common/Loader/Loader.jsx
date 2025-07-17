import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"; 
import { FaRegFaceSmileBeam } from "react-icons/fa6";

const Loader = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        // background: "linear-gradient(135deg, #FFF7ED, #FFE8CC)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          size={50}
          thickness={4}
          sx={{ color: "#3BB77E" }} 
        />
        
      </Box>
      <Typography
        variant="h6"
        sx={{
          mt: 3,
          fontWeight: 500,
          color: "#4d4d4d",
          fontFamily: "Poppins, sans-serif",
        }}
      >
       A smile a day keeps delay away… loading now! <FaRegFaceSmileBeam color="#3BB77E" size={30} />
      </Typography>
    </Box>
  );
};

export default Loader;
