import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import AddressComponent from "./AddressComponent"; 

const Address = () => {
  return (
    <Box sx={{ py: 2 }}>
     

      <Grid container spacing={{xs:1 ,md:10}} justifyContent="center">
        <Grid item xs={12} md={4}>
          <AddressComponent
            title="Office"
            address="205 North Michigan Avenue"
            city="Chicago, 60601, USA"
            phone="(123) 456-7890"
            email="contact@evara.com"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <AddressComponent
            title="Studio"
            address="Plot No 22, Gachibowli Main Road"
            city="Hyderabad, 500032, India"
            phone="(987) 654-3210"
            email="gachibowli@evara.com"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <AddressComponent
            title="Shop"
            address="Shop No 15, Metro Pillar 85"
            city="Hyderabad, 500016, India"
            phone="(555) 789-1234"
            email="ameerpet@evara.com"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Address;
