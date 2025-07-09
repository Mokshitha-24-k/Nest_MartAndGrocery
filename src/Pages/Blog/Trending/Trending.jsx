import React from "react";
import { Grid, Box, Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Images from "../../../Assets/Images";

const Trending = () => {
  const trends = [
    { Img: Images.Trending1, title: "Mango Juice", Price: "$99.50" },
    { Img: Images.Trending2, title: "Banana", Price: "$89.50" },
    { Img: Images.Trending3, title: "Water Melon", Price: "$25" },
    { Img: Images.Trending4, title: "Jack Fruit", Price: "$25" },
  ];

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "300px" },
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        borderRadius: "16px",
        p: 3,
        marginTop:"30px",
        marginBottom:{xs:"80px" ,md:"5px"}
      }}
    >
     
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          color="#253D4E"
          sx={{ mb: 1, textAlign: "left" }}
        >
          Trending Now
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

      
      <Stack spacing={2}>
        {trends.map((trend, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              p: 1,
              borderRadius: "12px",
              bgcolor: "#fff",
            }}
          >
            <Box
              component="img"
              src={trend.Img}
              alt={trend.title}
              sx={{ width: 65, height: 65, borderRadius: "8px" }}
            />
            <Box>
              <Typography variant="body1" color="#3BB77E" align="left">
                {trend.title}
              </Typography>
              <Typography variant="body2" color="#7E7E7E" align="left">
                {trend.Price}
              </Typography >
              <Box sx={{ textAlign: "left", mt: 0.5 }}>
  <StarIcon sx={{ color: "#FFD700", fontSize: 18 }} />
</Box>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Trending;
