import React from 'react';
import { Box, Typography, Button, Stack } from "@mui/material";

const BlogTopComponent = ({ backgroundImage, title, text, buttons = [] }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: '16px',
        height: "auto",
        py: { xs: 4, md: 6 },
        px: { xs: 3, md: 6 },
        width: "90%",
        margin: "30px auto 30px auto",
        color: "#fff",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "space-between",
        gap: 2,
        width:"90%",
        mx:'auto',
      }}
    >
     
      <Box>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#253D4E", mb: 1 }}
        >
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: "#7E7E7E" }}>
          {text}
        </Typography>
      </Box>

      {/* Right Buttons */}
      <Stack
        direction="row"
        spacing={2}
        sx={{
          mt: { xs: 2, md: 0 },
          flexWrap: "wrap",
        }}
      >
        {buttons.map((btn, index) => (
          <Button
            key={index}
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              color: "#3BB77E",
              borderRadius: "50px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
            }}
          >
            {btn.label}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default BlogTopComponent;
