import React from "react";
import { Box, Grid, Typography, Stack, Divider } from "@mui/material";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { FaPinterestP } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
const Footer4 = () => {
  return (
    <div>
      <Box>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "90%", mx: "auto" }}
        >
          <Grid item xs={6} md={4}>
            <Box>
              <Typography
                variant="body2"
                sx={{ fontSize: "12px", color: "#7E7E7E" }}
              >
                © 2024,{" "}
                <span style={{ color: "#3cb371", fontWeight: 500 }}>Nest</span>{" "}
                - HTML Ecommerce Template
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "12px", color: "#999", textAlign:"left"}}
              >
                All rights reserved
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            md={4}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <Stack
              direction="row"
              spacing={3}
              justifyContent="center"
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LuPhoneCall style={{ color: "#7E7E7E", fontSize: 28 }} />
                </Box>
                <Box>
                  <Typography
                    sx={{ fontWeight: 600, color: "#3cb371", fontSize: "17px" }}
                  >
                    1900 - 6666
                  </Typography>
                  <Typography sx={{ fontSize: "10px", color: "#7E7E7E" }}>
                    Working 8:00 - 22:00
                  </Typography>
                </Box>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={1}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LuPhoneCall style={{ color: "#7E7E7E", fontSize: 28 }} />
                </Box>
                <Box>
                  <Typography
                    sx={{ fontWeight: 600, color: "#3cb371", fontSize: "17px" }}
                  >
                    1900 - 8888
                  </Typography>
                  <Typography sx={{ fontSize: "10px", color: "#7E7E7E" }}>
                    24/7 Support Center
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "right" }}>
            <Stack
              direction="row"
              spacing={1}
              justifyContent={{ xs: "center", md: "flex-end" }}
              alignItems="center"
              sx={{ mb: 1 }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: 500, fontSize: "13px", color: "black" }}
              >
                Follow Us
              </Typography>
              <FaFacebook style={{ color: "#3cb371" }} />
              <AiFillTwitterCircle style={{ color: "#3cb371" }} />
              <FaInstagramSquare style={{ color: "#3cb371" }} />
              <FaPinterestP style={{ color: "#3cb371" }} />
              <ImYoutube style={{ color: "#3cb371" }} />
            </Stack>
            <Typography
              variant="caption"
              sx={{
                fontSize: "11px",
                color: "#7E7E7E",
                mt: 1,
                display: "block",
              }}
            >
              Up to 15% discount on your first subscribe
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Footer4;
