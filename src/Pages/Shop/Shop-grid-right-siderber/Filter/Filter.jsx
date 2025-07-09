import React from "react";
import {
  Box,
  Typography,
  Slider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Divider,
  Stack,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Images from "../../../../Assets/Images"

const Filter = () => {
  return (
    <Box
      sx={{
        width: "100%",
        p: 3,
        borderRadius: 3,
        boxShadow: 3,
        bgcolor: "#fff",
        position: "relative",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Fill by price
      </Typography>

      <Slider
  value={[500, 1000]}
  min={0}
  max={2000}
  step={50}
  disabled
  sx={{
    mb: 1,
    "& .MuiSlider-thumb": {
      bgcolor: "#3BB77E", 
    },
    "& .MuiSlider-track": {
      bgcolor: "#3BB77E", 
      border: "none",
    },
    "& .MuiSlider-rail": {
      bgcolor: "##687188", 
    },
  }}
/>


      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Typography variant="body2">
          From: <span style={{ color: "#3BB77E" }}>$500</span>
        </Typography>
        <Typography variant="body2">
          To: <span style={{ color: "#3BB77E" }}>$1,000</span>
        </Typography>
      </Stack>

      <Divider sx={{ mb: 2 }} />

      <Typography variant="subtitle1" sx={{color:"#687188", fontSize:"14px"}}>Color</Typography>
      <FormGroup sx={{ mb: 2 ,color:"#687188", fontSize:"14px"}}>
        <FormControlLabel control={<Checkbox />} label="Red (56)" />
        <FormControlLabel control={<Checkbox />} label="Green (78)" />
        <FormControlLabel control={<Checkbox />} label="Blue (54)" />
      </FormGroup>

      <Typography variant="subtitle1" sx={{color:"#687188", fontSize:"14px"}}>Item Condition</Typography>
      <FormGroup sx={{ mb: 2,color:"#687188", fontSize:"14px" }}>
        <FormControlLabel control={<Checkbox />} label="New (1506)" />
        <FormControlLabel control={<Checkbox />} label="Refurbished (27)" />
        <FormControlLabel control={<Checkbox />} label="Used (45)" />
      </FormGroup>

      <Button
        variant="contained"
        fullWidth
        sx={{ bgcolor: "#3BB77E", ":hover": { bgcolor: "#329b6d" }, mb: 2 }}
        startIcon={<FilterAltIcon />}
      >
        Filter
      </Button>

      
    </Box>
  );
};

export default Filter;
