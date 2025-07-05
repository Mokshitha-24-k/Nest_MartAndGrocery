import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Images from "../../../Assets/Images";

const Gallery = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "300px" },
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        borderRadius: "16px",
        p: 3,
        marginTop: "30px",
      }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          color="#253D4E"
          sx={{ mb: 1, textAlign: "left" }}
        >
          Gallery
        </Typography>
        <Box sx={{ position: "relative", height: "4px" }}>
          <Box
            sx={{
              width: "100%",
              height: "2px",
              backgroundColor: "#ECECEC",
              borderRadius: "4px",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "25%",
              height: "5px",
              backgroundColor: "#3BB77E",
              borderRadius: "4px",
            }}
          />
        </Box>
      </Box>
      <Stack direction='column'>
      <Stack direction="row">
        <Box
          component="img"
          src={Images.Trending1}
          sx={{ width: '33.3%', height: 80, borderRadius: "8px" }}
          padding={1}
        />
         <Box
          component="img"
          src={Images.Trending2}
          sx={{ width: "33.3%", height: 80, borderRadius: "8px" }}
          padding={1}
        />
         <Box
          component="img"
          src={Images.Trending3}
          sx={{ width: "33.3%", height: 80, borderRadius: "8px" }}
          padding={1}
        />
      </Stack>
      <Stack direction="row">
        <Box
          component="img"
          src={Images.Trending4}
          sx={{ width: "33.3%", height: 80, borderRadius: "8px" }}
          padding={1}
        />
         <Box
          component="img"
          src={Images.Blog_Gallery1}
          sx={{ width: "33.3%", height: 80, borderRadius: "8px" }}
          padding={1}
        />
         <Box
          component="img"
          src={Images.Blog_Gallery2}
          sx={{ width: "33.3%", height: 80, borderRadius: "8px" }}
          padding={1}
        />
      </Stack>
      </Stack>
    </Box>
  );
};

export default Gallery;
