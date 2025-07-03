import React from "react";
import { Box, Typography } from "@mui/material";
import Images from "../../../Assets/Images";

const Welcome = () => {
  return (
    <Box sx={{ py: 6, overflowX: "hidden" }}>
      <Box
        sx={{
          width: "100%",
          mx: "auto",
          px: { xs: 2, sm: 4, md: 6 },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          alignItems: { xs: "flex-start", md: "center" },
        }}
      >
        
        <Box
          sx={{
            flex: 1,
            minWidth: { xs: "100%", sm: "300px" },
          }}
        >
        
          <Box
            component="img"
            src={Images.AboutComboPic}
            alt="About"
            sx={{
              width: "100%",
              height: { xs: 250, sm: 300 },
              borderRadius: 2,
              objectFit: "contain",
            }}
          />
        </Box>

       
        <Box sx={{ flex: 1 , textAlign:"left",}}>
            <Typography variant="h6" sx={{color:"text.secondary"}} >our performance</Typography>
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{
              color: "#222",
              mb: 2,
              position: "relative",
              display: "inline-block",
              
            }}
          >
            Your Partner for e-commerce grocery solution
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              mb: 3,
              lineHeight: 1.7,
              whiteSpace: "pre-wrap",
            }}
          >
            Nest Mart is your trusted online destination for fresh groceries and
            everyday essentials. From fruits, vegetables, and dairy to snacks,
            beverages, and household items, we bring a wide range of quality
            products right to your doorstep with fast, reliable delivery.

            <br />
            <br />
            We focus on convenience, affordability, and freshness — helping you
            save time while enjoying top brands and handpicked produce.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
