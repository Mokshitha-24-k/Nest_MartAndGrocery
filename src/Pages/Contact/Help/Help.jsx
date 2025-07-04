import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Help = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ maxWidth: "100%", margin: "0 auto" }}
      >
       
        <Grid item sx={{ width: { xs: "100%", md: "30%" } }}>
          <Box
            textAlign="left"
            sx={{
              p: 2,
              height: "100%",
              minHeight: 250,
              
            }}
          >
            <Typography variant="subtitle2" color="#3BB77E" mb={1}>
              How can we help you?
            </Typography>
            <Typography variant="h4" color="#253D4E" mb={1}>
              Let us know how we can help you
            </Typography>
            <Typography variant="body2" color="#7E7E7E">
              We're here to support you at every step of your shopping journey.
              Our team is dedicated to providing fast, friendly help anytime.
              We're here to support you at every step of your shopping journey.
              Our team is dedicated to providing fast, friendly help anytime.
             
            </Typography>
          </Box>
        </Grid>

        
        <Grid item sx={{ width: { xs: "100%", md: "30%" } }}>
          <Box
            textAlign="left"
            sx={{
              p: 2,
              height: "100%",
              minHeight: 250,
              pt: 7,
              
            }}
          >
            <Typography variant="body1" color="#253D4E" mb={2}>
              01. Visit Feedback
            </Typography>
            <Typography variant="body2" color="#7E7E7E" mb={2}>
              We value your opinion! Share your experience with us so we can
              continue improving our services and make your future visits even
              better.
            </Typography>
            <Typography variant="body1" color="#253D4E" mb={1}>
              03. Billing Inquiries
            </Typography>
            <Typography variant="body2" color="#7E7E7E">
              Need help with your bill or payment? Our support team is ready to
              assist you with any billing questions, refunds, or invoice
              clarifications.
            </Typography>
          </Box>
        </Grid>

       
        <Grid item sx={{ width: { xs: "100%", md: "30%" } }}>
          <Box
            textAlign="left"
            sx={{
              p: 2,
              height: "100%",
              minHeight: 250,
              pt: 7,
              
            }}
          >
            <Typography variant="body1" color="#253D4E" mb={2}>
              02. Employer Services
            </Typography>
            <Typography variant="body2" color="#7E7E7E" mb={2}>
              Partner with us for customized solutions and bulk purchasing
              options. We offer dedicated support to meet your business needs
              efficiently.
            </Typography>
            <Typography variant="body1" color="#253D4E" mb={1}>
              04. General Inquiries
            </Typography>
            <Typography variant="body2" color="#7E7E7E">
              Have a question that doesn’t fit a specific category? Reach out to
              us anytime — we’re happy to help with anything you need.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Help;
