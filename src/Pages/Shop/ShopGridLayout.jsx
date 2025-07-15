import React, { useState } from "react";
import { Box, Snackbar, Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import Category from "../Blog/Category/Category";
import Trending from "../Blog/Trending/Trending";
import TopLayer from "./Shop-grid-right-siderber/TopLayer/TopLayer";
import Filter from "./Shop-grid-right-siderber/Filter/Filter";
import Deals from "./Shop-grid-right-siderber/Deals/Deals";
import Items from "./Shop-grid-right-siderber/Items/Items";
import { addToCart } from "../../Redux/cartActions";

const ShopGridLayout = ({ sidebarPosition = "right" }) => {
  const dispatch = useDispatch();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setSnackbarMsg(`${product.title} added to cart`);
    setSnackbarOpen(true);
  };

  const Sidebar = (
    <Box
      sx={{
        flex: 1,
        maxWidth: { xs: "100%", md: 300 },
        width: "100%",
        position: { xs: "relative", md: "sticky" },
        top: 100,
        alignSelf: "flex-start",
      }}
    >
      <Box sx={{ height: 48, mb: 2 }} />
      <Category />
      <Filter />
      <Trending />
    </Box>
  );

  const MainContent = (
    <Box sx={{ flex: 3, width: "100%" }}>
      <Items onAddToCart={handleAddToCart} />
      <Deals />
    </Box>
  );

  return (
    <div style={{ overflowX: "hidden" }}>
      <TopLayer />
      <Box sx={{ px: 3, py: 6, width: "100%", mx: "auto" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            flexWrap: "wrap",
          }}
        >
          {sidebarPosition === "left" ? (
            <>
              {Sidebar}
              {MainContent}
            </>
          ) : (
            <>
              {MainContent}
              {Sidebar}
            </>
          )}
        </Box>
      </Box>

     
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: "100%" }}>
          {snackbarMsg}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ShopGridLayout;
