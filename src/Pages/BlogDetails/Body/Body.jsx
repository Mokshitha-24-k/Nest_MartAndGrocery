import React from "react";
import { Box, Typography, Stack , Button, Grid, TextField} from "@mui/material";
import Images from "../../../Assets/Images";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import StarIcon from '@mui/icons-material/Star';

const Body = () => {
  return (
    <Box sx={{ width: "80%", margin: "auto" }}>
      <Typography
        variant="body1"
        sx={{ color: "#253D4E", fontSize: "24px", mb: 3, textAlign: "justify" }}
      >
        Helping everyone live happier, healthier lives at home through their
        kitchen. Kitchn is a daily food magazine on the Web celebrating life in
        the kitchen through home cooking and kitchen intelligence.
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "#253D4E", fontSize: "17px", mb: 3, textAlign: "justify" }}
      >
        We've reviewed and ranked all of the best smartwatches on the market
        right now, and we've made a definitive list of the top 10 devices you
        can buy today. One of the 10 picks below may just be your perfect next
        smartwatch.
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "#253D4E", fontSize: "17px", mb: 3, textAlign: "justify" }}
      >
        Those top-end wearables span from the Apple Watch to Fitbits, Garmin
        watches to Tizen-sporting Samsung watches. There's also Wear OS which is
        Google's own wearable operating system in the vein of Apple's watchOS -
        you’ll see it show up in a lot of these devices.
      </Typography>

      <Typography
        variant="body1"
        sx={{ color: "#253D4E", fontSize: "20px", textAlign: "justify", mb: 3 }}
      >
        Lorem ipsum dolor sit amet cons
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "#253D4E", fontSize: "17px", mb: 3, textAlign: "justify" }}
      >
        Throughout our review process, we look at the design, features, battery
        life, spec, price and more for each smartwatch, rank it against the
        competition and enter it into the list you'll find below.
      </Typography>
      <Box
        component="img"
        src={Images.BlogDetailsBody}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <Typography
        variant="body2"
        sx={{ color: "#253D4E", fontSize: "17px", mb: 3, textAlign: "justify" }}
      >
        Tortor, lobortis semper viverra ac, molestie tortor laoreet amet euismod
        et diam quis aliquam consequat porttitor integer a nisl, in faucibus
        nunc et aenean turpis dui dignissim nec scelerisque ullamcorper eu
        neque, augue quam quis lacus pretium eros est amet turpis nunc in turpis
        massa et eget facilisis ante molestie penatibus dolor volutpat, porta
        pellentesque scelerisque at ornare dui tincidunt cras feugiat tempor
        lectus
      </Typography>

      <Typography
        variant="body2"
        sx={{ color: "#253D4E", fontSize: "24px", mb: 6, textAlign: "justify", backgroundColor:"#F4F6FA" ,width:"85%", p:5, borderRadius:'5px', margin:"auto" }}
      >
        diam elementum imperdiet. Etiam accumsan semper nisl eu congue. Sed
        aliquam magna erat, ac eleifend lacus rhoncus in.
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "#253D4E", fontSize: "17px", mb: 5, mt:3, textAlign: "justify" }}
      >
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id enim, libero sit. Est donec lobortis cursus amet, cras
elementum libero convallis feugiat. Nulla faucibus facilisi tincidunt a arcu, sem donec sed sed. Tincidunt morbi
scelerisque lectus non. At leo mauris, vel augue. Facilisi diam consequat amet, commodo lorem nisl, odio malesuada
cras. Tempus lectus sed libero viverra ut. Facilisi rhoncus elit sit sit.
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <Button variant="contained" sx={{ backgroundColor: "#3BB77E", color: "#fff", "&:hover": { backgroundColor: "#329b6d" }  }}>
         deer
        </Button>
        <Button variant="contained" sx={{ backgroundColor: "#3BB77E", color: "#fff", "&:hover": { backgroundColor: "#329b6d" } }}>
          nature
        </Button>
        <Button variant="contained" sx={{ backgroundColor: "#3BB77E", color: "#fff", "&:hover": { backgroundColor: "#329b6d" } }}>
          conserve
        </Button>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="body2" sx={{ color: "#A2A2A2" }}>
            Share this:
          </Typography>
          <FacebookIcon sx={{ color: "#A2A2A2", fontSize: 20 }} />
          <TwitterIcon sx={{ color: "#A2A2A2", fontSize: 20 }} />
          <InstagramIcon sx={{ color: "#A2A2A2", fontSize: 20 }} />
          <PinterestIcon sx={{ color: "#A2A2A2", fontSize: 20 }} />
        </Stack>
      </Stack>
      <Box
      sx={{
        borderRadius: '16px',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        border: '1px solid #ECECEC',
        p: { xs: 2, md: 3 },
        m: { xs: 2, md: 3 },
        width: '100%',
      }}
    >
      
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        flexWrap="wrap"
        mb={2}
      >
        <Box
          component="img"
          src={Images.HeadingPic}
          alt="Author"
          sx={{
            width: 50,
            height: 50,
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />

        <Box>
          <Typography
            variant="body1"
            sx={{ fontWeight: '700', color: '#253D4E', fontSize: '20px' }}
          >
            Barbara Cartland
          </Typography>
          <Typography
            variant="caption"
            sx={{ fontWeight: '400', color: '#B6B6B6', fontSize: '14px' }}
          >
            306 posts · Since 2012
          </Typography>
        </Box>
      </Stack>

      
      <Typography
        sx={{
          color: '#253D4E',
          fontWeight: 400,
          fontSize: '17px',
          textAlign: 'justify',
        }}
      >
        Hi there, I am a veteran food blogger sharing my daily all kinds of healthy and fresh recipes. I find inspiration in
        nature, on the streets and almost everywhere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id
        enim, libero sit. Est donec lobortis cursus amet, cras elementum libero.
      </Typography>
    </Box>

      <Box>
  <Typography
    variant="body1"
    sx={{
      color: "#253D4E",
      fontSize: "36px",
      fontWeight: 700,
      textAlign: "left",
    }}
  >
    Leave a Comment
  </Typography>

  <StarIcon
    sx={{fontSize: 14,color: '#A2A2A2',mt: 1, display: "block",  }}/>
    <Box component="form" sx={{ mt: 3 }}>
        
        <TextField
          fullWidth
          multiline
          minRows={4}
          placeholder="Comment"
          variant="outlined"
          sx={{ mb: 3 }}
        />

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}  sx={{width:{xs:"100%" , md:"49%"}}}>
            <TextField
              fullWidth
              placeholder="Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}  sx={{width:{xs:"100%" , md:"49%"}}}>
            <TextField
              fullWidth
              placeholder="Email"
              variant="outlined"
            />
          </Grid>
        </Grid>

        
        <Box mt={3}>
          <TextField
            fullWidth
            placeholder="Website"
            variant="outlined"
          />
        </Box>

       
        <Box mt={3} textAlign="left">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#3BB77E",
              color: "#fff",
              px: 4,
              py: 1.5,
              fontWeight: "bold",
              fontSize: "14px",
              textTransform: "none",
              '&:hover': {
                backgroundColor: "#35a469"
              }
            }}
          >
            Post Comment
          </Button>
        </Box>
        </Box>
</Box>

    </Box>
  );
};

export default Body;
