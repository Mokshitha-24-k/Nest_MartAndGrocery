import React from 'react';
import { Box, Stack, Typography } from "@mui/material";
import Images from "../../../Assets/Images";

const Heading = () => {
  return (
    <Box sx={{ width: '100%' }}>
      
      
      <Box sx={{ maxWidth: "800px", width: "100%", mb: 3 }}>
        <Typography variant="caption" sx={{ color: '#3BB77E', textAlign: "left", display: "block" }}>
          Smartwatches
        </Typography>

        <Typography variant="h4" sx={{ color: "#253D4E", mb: 2, textAlign: "left" }}>
          Best Smartwatch 2025: The Top Wearables You Can Buy Today
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <Box
            component="img"
            src={Images.HeadingPic}
            alt="Author"
            sx={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <Typography variant="caption" sx={{ color: "#7E7E7E", fontSize: "10px" }}>
            By
          </Typography>
          <Typography variant="caption" sx={{ color: "#3BB77E", fontSize: "10px" }}>
            Sugar Zrosie
          </Typography>
          <Typography variant="caption" sx={{ color: "#7E7E7E", fontSize: "10px" }}>
            • 2 hours ago
          </Typography>
          <Typography variant="caption" sx={{ color: "#7E7E7E", fontSize: "10px" }}>
            • 8 mins read
          </Typography>
        </Stack>
      </Box>

    
      <Box
        component="img"
        src={Images.BlogDetailsPic}
        alt="Blog banner"
        sx={{
          width: "100%",
          height: "auto",
          borderRadius: "10px",
        }}
      />
    </Box>
  );
};

export default Heading;
