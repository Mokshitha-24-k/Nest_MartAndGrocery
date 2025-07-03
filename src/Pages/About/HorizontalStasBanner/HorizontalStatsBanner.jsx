import React from 'react';
import {Box, Typography, Grid} from "@mui/material";
import Images from "../../../Assets/Images"

const HorizontalStatsBanner = () => {
    const Stats=[
        {number:"10+", label:"Glorious Years"},
        {number:"50+", label:"Happy Clients"},
        {number:"80+", label:"Projects Completed"},
        {number:"20+", label:"Team Advisors"},
        {number:"500+", label:"Product Sales"},
    ];
  return (
    <Box sx={{backgroundImage: `url(${Images.AboutLongPic})`,
    backgroundAttachment:"fixed",
     backgroundSize:"cover",
     backgroundPosition:"center",
     borderRadius:"20px",
     py:{xs:6, md:8}, 
     px:{xs:2,md:6}, 
     color:"white", 
     textAlign:"center",
     position :"relative",
     overflow:"hidden",
     mb: { xs: 6, md: 6 }, 

     "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      backgroundColor: "rgba(75, 103, 90, 0.65)", 
      zIndex: 1,
    },
     }}>


        <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{ position: "relative", zIndex: 2 }}
      >
           {Stats.map((item, index)=>(
            <Grid
            item
            xs={6}
            sm={4}
            md={2.4}
            key={index}
            sx={{ minWidth: 140 }}
          >
                <Typography variant="h2" fontWeight={700} sx={{mb:1, fontSize:{xs:"1.5rem", md:"2rem"}}}>{item.number}</Typography>
                <Typography variant="subtitle1" sx={{fontSize:{xs:"0.9rem", md:"1rem"}}}>{item.label}</Typography>
             </Grid>

           ))} 
       
        </Grid>
    </Box>
  )
}

export default HorizontalStatsBanner;
