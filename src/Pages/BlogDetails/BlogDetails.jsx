import React from "react";
import { Box } from "@mui/material";
import Category from "../Blog/Category/Category";
import SearchBar from "../Blog/SearchBar/SearchBar";
import Trending from "../Blog/Trending/Trending";
import Gallery from "../Blog/Gallery/Gallery";
import PopularTags from "../Blog/PopularTags/PopularTags";
import Heading from "./Heading/Heading";
import Body from "./Body/Body";
import Footer1 from "../../Components/Shell/Footer/Footer1/Footer1"

const BlogDetails = () => {
  return (
    <Box sx={{ px: 3, py: 6, width: "100%", mx: "auto" }}>

     
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
        }}
      >
        
        <Box sx={{ flex: 3 }}>
          <Heading />
          <Body />
        </Box>

        
        <Box
          sx={{
            flex: 1,
            maxWidth: 300,
            position: "sticky",
            top: 100,
            alignSelf: "flex-start"
          }}
        >
          <Box sx={{ height: 48, mb: 2 }}>
            <SearchBar />
          </Box>
          <Category />
          <Trending />
          <Gallery />
          <PopularTags />
          
        </Box>
      </Box>
      <Footer1 />
    </Box>
  );
};

export default BlogDetails;
