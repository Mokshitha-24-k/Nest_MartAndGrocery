import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import RecipiesComponent from "./RecipiesComponent";
import RecipiesData from "./RecipiesData";
import Images from "../../../Assets/Images";
import Category from "../Category/Category";
import SearchBar from "../SearchBar/SearchBar";
import Trending from "../Trending/Trending";
import Gallery from "../Gallery/Gallery";
import PopularTags from "../PopularTags/PopularTags";

const Recipies = () => {
  return (
    <Box sx={{ px: 3, py: 6, width: "100%", mx: "auto" }}>

     
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Box
            component="img"
            src={Images.BlogHead}
            alt="icon"
            sx={{ width: 28, height: 28, objectFit: "contain" }}
          />
          <Typography variant="h5" fontWeight="bold" color="#253D4E">
            Recipe Articles
          </Typography>
        </Stack>

       
       
      </Box>

    
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
        }}
      >
       
        <Box sx={{ flex: 3, display: "flex", flexWrap: "wrap", gap: 2 }}>
          {RecipiesData.map((blog) => (
            <Box key={blog.id} sx={{ flex: "1 1 30%", minWidth: 250 }}>
              <RecipiesComponent
                image={blog.image}
                type={blog.type}
                title={blog.title}
                date={blog.date}
                views={blog.views}
                readTime={blog.readTime}
              />
            </Box>
          ))}
        </Box>

       
        <Box
          sx={{
            flex: 1,
            minWidth: 280,
            position: "sticky",
            top: 100,
          }}
        >
           <Box sx={{ width: "100%", maxWidth: 300, height:48, mt: { xs: 2, md: 0 }  ,mb:2}}>
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

export default Recipies;
