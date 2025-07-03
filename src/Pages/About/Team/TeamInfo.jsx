import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Images from '../../../Assets/Images';

const TeamInfo = () => {
  const teamMembers = [
    {
      image: Images.TeamPerson1,
      name: "H. Merinda",
      role: "CEO & Co-Founder",
    },
    {
      image: Images.TeamPerson2,
      name: "Dilan Specter",
      role: "Head Engineer",
    },
  ];

  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: { xs: 4, md: 8 } }}>
     
      <Typography variant="h4" fontWeight={600} textAlign="center">
        Our Team
      </Typography>
      <Box
        component="img"
        src={Images.Underline}
        alt="underline"
        sx={{
          mt: 1,
          width: 90,
          display: "block",
          mx: "auto",
        }}
      />

      
      <Box
        sx={{
          mt: 6,
          display: "flex",
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "stretch",
        }}
      >
       
        <Box
          sx={{
            flex: { xs: '1 1 100%', md: '1 1 30%' },
            p: 1,
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            textAlign:"left"
            
          }}
        >
          <Box>
            <Typography
              variant="subtitle2"
              sx={{ color: "#2db94d", fontWeight: 600, mb: 1 }}
            >
              Our Team
            </Typography>
            <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
              Meet Our Expert Team
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", mb: 2 }}
            >
              Proin ullamcorper pretium orci. Donec necsele risque leo. Nam massa dolor imperdiet
              neccon sequata congue idsem. Maecenas malesuada faucibus finibus.
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", mb: 3 }}
            >
              Proin ullamcorper pretium orci. Donec necsele risque leo. Nam massa dolor imperdiet
              neccon sequata congue idsem. Maecenas malesuada faucibus finibus.
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2db94d",
              color: "#fff",
              textTransform: "none",
              width: "fit-content",
              "&:hover": { backgroundColor: "#249f3f" },
            }}
          >
            View All Members
          </Button>
        </Box>

        
        {teamMembers.map((member, index) => (
          <Box
            key={index}
            sx={{
              flex: { xs: '1 1 100%', md: '1 1 30%' },
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: 2,
             
              position: "relative",
              minWidth: 280,
            }}
          >
            
            <Box
              component="img"
              src={member.image}
              alt={member.name}
              sx={{ width: "100%", height: 350, objectFit: "cover", display: 'block' }}
            />

          
            <Box
              sx={{
                backgroundColor: "#fff",
                px: 3,
                py: 3,
                textAlign: "center",
                position: "relative",
                bottom: 40,
                mx: "auto",
                width: "85%",
                borderRadius: 3,
                boxShadow: "0px 6px 18px rgba(0,0,0,0.1)",
              }}
            >
              <Typography variant="h6" fontWeight={600} gutterBottom>
                {member.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {member.role}
              </Typography>

             
              <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 1 }}>
                {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
                  <IconButton
                    key={i}
                    size="small"
                    sx={{
                      color: "#2db94d",
                      "&:hover": { color: "#249f3f" },
                      p: 0.5,
                    }}
                  >
                    <Icon size={16} />
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TeamInfo;
