import React from 'react';
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';

const Info = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      sx={{ width: '90%', mx: 'auto', px: 2, py: 4,  }} >
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{
          flexWrap: isMdUp ? 'nowrap' : 'wrap',
        }}
      >
        <Grid item xs={12} sm={12} md={4}>
          <Box textAlign="left">
            <Typography variant="h6" sx={{ fontSize: '1rem', mb: 1 }}>
              Who We Are
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: '0.85rem', color: 'text.secondary' }}
            >
              Nest Mart is a trusted online grocery platform delivering quality essentials with speed and care.
              <br />
              We focus on freshness, affordability, and customer satisfaction in every order.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Box textAlign="left">
            <Typography variant="h6" sx={{ fontSize: '1rem', mb: 1 }}>
              Our History
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: '0.85rem', color: 'text.secondary' }}
            >
              Founded to simplify shopping, Nest Mart has grown through innovation and trust.
              <br />
              We’ve expanded across regions by prioritizing customer satisfaction.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Box textAlign="left">
            <Typography variant="h6" sx={{ fontSize: '1rem', mb: 1 }}>
              Our Mission
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: '0.85rem', color: 'text.secondary' }}
            >
              To make grocery shopping effortless, affordable, and accessible for all.
              <br />
              We are committed to innovation, sustainability, and service excellence.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Info;
