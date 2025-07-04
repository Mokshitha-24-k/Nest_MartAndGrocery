import React from "react";
import { Box, Typography, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const AddressComponent = ({ title, address, city, phone, email }) => {
  return (
    <Box
      sx={{
        p: 3,
        textAlign: "left",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="h6" gutterBottom color="#3BB77E">
          {title}
        </Typography>
        <Typography variant="body2" gutterBottom color="#7E7E7E">{address}</Typography>
        <Typography variant="body2" gutterBottom color="#7E7E7E">{city}</Typography>
        <Typography variant="body2" gutterBottom color="#7E7E7E">Phone: {phone}</Typography>
        <Typography variant="body2" gutterBottom color="#7E7E7E">Email: {email}</Typography>
      </Box>

      <Button
        variant="contained"
        size="small"
        href="#map-section"
        startIcon={<LocationOnIcon sx={{ color: "#fff" }} />}
        sx={{
          mt: 2,
          px: 2, 
          alignSelf: "flex-start", 
          backgroundColor: "#3BB77E",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#2DA96B",
          },
        }}
      >
        View Map
      </Button>
    </Box>
  );
};

export default AddressComponent;
