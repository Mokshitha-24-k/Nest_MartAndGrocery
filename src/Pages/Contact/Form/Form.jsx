import React from 'react';
import { Box, Grid, Typography } from "@mui/material";
import Images from '../../../Assets/Images';

const Form = () => {
  return (
    <Box sx={{  py: 6 ,px:3, maxWidth: '1200px', mx: 'auto' }}>
      <Grid container spacing={2} alignItems="flex-start">
     
        <Grid item xs={12} md={8} sx={{ width: { xs: "100%", md: "65%" } }}>
          <Box mb={3} sx={{textAlign:"left"}}>
            <Typography variant="subtitle2" color="#3BB77E" >
              Contact form
            </Typography>
            <Typography variant="h4" color="#253D4E" gutterBottom>
              Drop Us a Line
            </Typography>
            <Typography variant="caption" color="#B6B6B6">
              Your email address will not be published. Required fields are marked *
            </Typography>
          </Box>

          <form>
            <Grid container spacing={2}>
             
              <Grid item xs={12} md={6} sx={{ width: { xs: "100%", md: "45%" } }}>
                <input
                  type="text"
                  placeholder="First Name"
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
                />
              </Grid>
              <Grid item xs={12} md={6} sx={{ width: { xs: "100%", md: "45%" } }}>
                <input
                  type="email"
                  placeholder="Your Email"
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
                />
              </Grid>

             
              <Grid item xs={12} md={6} sx={{ width: { xs: "100%", md: "45%" } }}>
                <input
                  type="tel"
                  placeholder="Your Phone"
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
                />
              </Grid>
              <Grid item xs={12} md={6} sx={{ width: { xs: "100%", md: "45%" } }}>
                <input
                  type="text"
                  placeholder="Subject"
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
                />
              </Grid>

            
              <Grid item xs={12} sx={{ width: { xs: "100%", md: "92%" } }}>
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
                ></textarea>
              </Grid>

             
              <Grid item xs={12} sx={{ width: { xs: "100%", md: "30%", textAlign:"left"} }}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#253D4E",
                    color: "#fff",
                    padding: "20px 20px",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    
                  }}
                >
                  Send Message
                </button>
              </Grid>
            </Grid>
          </form>
        </Grid>

       
        <Grid item xs={12} md={4} sx={{ width: { xs: "100%", md: "30%" } }}>
          <Box
            component="img"
            src={Images.FormImage}
            alt="Contact"
            sx={{ width: "100%", borderRadius: 2, boxShadow: 2 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Form;
