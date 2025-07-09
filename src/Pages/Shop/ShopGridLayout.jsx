import React from "react";
import { Box } from "@mui/material";
import Category from "../Blog/Category/Category";
import Trending from "../Blog/Trending/Trending";
import TopLayer from "./Shop-grid-right-siderber/TopLayer/TopLayer";
import Filter from "./Shop-grid-right-siderber/Filter/Filter";
import Deals from "./Shop-grid-right-siderber/Deals/Deals";
import Items from "./Shop-grid-right-siderber/Items/Items";

const ShopGridLayout = ({ sidebarPosition = "right" }) => {
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
      <Items />
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
    </div>
  );
};

export default ShopGridLayout;
