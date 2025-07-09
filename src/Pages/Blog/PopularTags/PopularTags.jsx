import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const tags = [
  "Cabbage", "Broccoli",
  "Smoothie", "Fruit",
  "Salad", "Appetizer"
];

const PopularTags = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "300px" },
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        borderRadius: "16px",
        p: 3,
        mt: "30px",
        bgcolor: "#fff",
        mb:5
      }}
    >
     
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" fontWeight="bold" color="#253D4E">
          Popular Tags
        </Typography>
        <Box sx={{ position: "relative", height: "4px", mt: 1 }}>
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
              height: "4px",
              backgroundColor: "#3BB77E",
              borderRadius: "4px",
            }}
          />
        </Box>
      </Box>

      
      <Grid container spacing={1}>
        {tags.map((tag, index) => (
          <Grid item xs={6} key={index}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ECECEC",
                color: "#3BB77E",
                borderRadius: "999px",
                py: 0.5,
                px: 1.5,
                fontSize: "14px",
                fontWeight: 500,
                gap: 1,
              }}
            >
              <span style={{ color: "#ECECEC", fontWeight: "bold" }}>×</span>
              {tag}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PopularTags;
