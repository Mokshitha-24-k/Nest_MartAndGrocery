import React from "react";
import { Box, Typography } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import EggIcon from "@mui/icons-material/Egg";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import "./Loader.css";

const Loader = () => {
  return (
    <Box className="grocery-loader">
      <Box className="basket">
        <ShoppingBasketIcon className="basket-icon" />
      </Box>
      <Box className="flying-icons">
        <EmojiFoodBeverageIcon className="item item1" />
        <EggIcon className="item item2" />
        <LocalGroceryStoreIcon className="item item3" />
      </Box>
      <Typography className="loading-text">Bringing Freshness to You...</Typography>
    </Box>
  );
};

export default Loader;
