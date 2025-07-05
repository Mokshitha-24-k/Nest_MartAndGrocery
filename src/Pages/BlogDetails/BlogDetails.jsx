import React from "react";
import { Box } from "@mui/material";
import Category from "../Blog/Category/Category";
import SearchBar from "../Blog/SearchBar/SearchBar";
import Trending from "../Blog/Trending/Trending";
import Gallery from "../Blog/Gallery/Gallery";
import PopularTags from "../Blog/PopularTags/PopularTags";
import Heading from "./Heading/Heading";
import Body from "./Body/Body";

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
        {/* Left Main Content */}
        <Box sx={{ flex: 3 }}>
          <Heading />
          <Body /> {/* This can be paragraphs, images, etc. */}
        </Box>

        {/* Right Sidebar */}
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
    </Box>
  );
};

export default BlogDetails;
