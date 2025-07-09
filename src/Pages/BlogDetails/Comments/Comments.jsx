// CommentsSection.jsx
import React from "react";
import {
  Box,
  Typography,
  Card,
  Grid,
  IconButton
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

// Sample comments
const comments = [
  {
    name: "Sienna",
    date: "December 4, 2022 at 3:12 pm",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Brenna",
    date: "December 4, 2022 at 3:12 pm",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?",
    image: "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    name: "Gemma",
    date: "December 4, 2022 at 3:12 pm",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?",
    image: "https://randomuser.me/api/portraits/women/48.jpg"
  }
];

const CommentCard = ({ name, date, comment, image }) => (
  <Card
    sx={{
      borderRadius: "16px",
      p: 2,
      mb: 3,
      position: "relative",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
    }}
  >
    {/* Star icon */}
    <IconButton
      size="small"
      sx={{ position: "absolute", top: 16, right: 16, color: "#FDC040" }}
    >
      <StarIcon fontSize="small" />
    </IconButton>

    {/* Flex container */}
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "flex-start",
        gap: 2,
      }}
    >
      {/* Left: image and name below */}
      <Box
        sx={{
          width: { xs: "100%", sm: "20%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box
          component="img"
          src={image}
          alt={name}
          sx={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            objectFit: "cover",
            mb: 1,
          }}
        />
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: 600, fontSize: "14px", color: "#3BB77E" }}
        >
          {name}
        </Typography>
      </Box>

      {/* Right: date + comment */}
      <Box
        sx={{
          width: { xs: "100%", sm: "80%" },
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: "#8A8A8A", fontSize: "13px", mb: 1 }}
        >
          {date}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#253D4E", fontSize: "15px", textAlign: "justify" }}
        >
          {comment}
        </Typography>
      </Box>
    </Box>
  </Card>
);

const CommentsSection = () => {
  return (
    <Box sx={{ maxWidth: "85%", mx: "auto", px: 2, py: 4 }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 4,
          color: "#253D4E",
          fontSize: "28px",
          textAlign: "left"
        }}
      >
        Comments
      </Typography>

      {comments.map((comment, index) => (
        <CommentCard key={index} {...comment} />
      ))}
    </Box>
  );
};

export default CommentsSection;
