import React from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import RecipiesComponent from "./RecipiesComponent";
import RecipiesData from "./RecipiesData";
import Images from "../../../Assets/Images"; 

const Recipies = () => {
  return (
    <Box sx={{ px: 3, py: 6, width: "90%", mx: "auto" }}>

      
      <Stack direction="row" alignItems="center" spacing={1} mb={3}>
        <Box
          component="img"
          src={Images.BlogHead} 
          alt="icon"
          sx={{ width: 28, height: 28, objectFit: "contain" }}
        />
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#253D4E",
          }}
        >
          Recipe Articles
        </Typography>
      </Stack>

      <Grid container spacing={3}>
       
        <Grid item xs={12} md={9} sx={{ width: { xs: "100%", md: "80%" } }}>
          <Grid container spacing={2} alignItems="stretch">
            {RecipiesData.map((blog) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={blog.id}
                display="flex"
                sx={{ width: { xs: "100%", md: "30%" } }}
              >
                <RecipiesComponent
                  image={blog.image}
                  type={blog.type}
                  title={blog.title}
                  date={blog.date}
                  views={blog.views}
                  readTime={blog.readTime}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        
        <Grid item xs={12} md={3}>
          <Box sx={{ position: "sticky", top: 100 }}>
            Sidebar Placeholder
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Recipies;
