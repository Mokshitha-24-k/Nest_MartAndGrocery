import React from "react";
import { Box, Typography } from "@mui/material";

const RecipiesComponent = ({ image, type, title, date, views, readTime }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 2,
        backgroundColor: "#fff",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
        },
      }}
    >
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          flexShrink: 0,
        }}
      />

      <Box sx={{ p: 2, flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Typography variant="caption" color="primary" fontWeight={500}>
          {type}
        </Typography>

        <Typography
          variant="h6"
          fontWeight="bold"
          mt={1}
          sx={{
            overflow: "hidden",
          }}
        >
          {title}
        </Typography>

        <Typography variant="caption" color="text.secondary" mt="auto">
          {date} &bull; {views} views &bull; {readTime}
        </Typography>
      </Box>
    </Box>
  );
};

export default RecipiesComponent;
