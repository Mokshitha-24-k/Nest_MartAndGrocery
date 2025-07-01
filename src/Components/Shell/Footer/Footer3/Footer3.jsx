import React from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import { CiLocationOn } from "react-icons/ci";
import { LuHeadphones, LuClock } from "react-icons/lu";
import { RiTelegram2Line } from "react-icons/ri";
import Images from "../../../../Assets/Images";

const Footer3 = () => {
  return (
    <Box sx={{ py: 5, textAlign: "left" }}>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="flex-start"
        sx={{ width: "90%", margin: "auto" }}
      >
        <Grid item xs={12} sm={4} md={4}>
          <Stack spacing={1}>
            <Box
              component="img"
              src={Images.Logo}
              alt="Logo"
              sx={{ width: 120 }}
            />
            <Typography
              variant="body2"
              sx={{ mt: 1, fontSize: "15px", fontFamily: "Lato" }}
            >
              Awesome grocery store website template
            </Typography>

            <Stack direction="row" alignItems="center" spacing={1}>
              <CiLocationOn color="#3bb77e" />
              <Typography
                variant="body2"
                sx={{ fontSize: "15px", fontFamily: "Lato" }}
              >
                5171 W Campbell Ave, UT 53127
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <LuHeadphones color="#3bb77e" />
              <Typography
                variant="body2"
                sx={{ fontSize: "15px", fontFamily: "Lato" }}
              >
                (+91) 540-025-124553
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <RiTelegram2Line color="#3bb77e" />
              <Typography
                variant="body2"
                sx={{ fontSize: "15px", fontFamily: "Lato" }}
              >
                sale@Nest.com
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <LuClock color="#3bb77e" />
              <Typography
                variant="body2"
                sx={{ fontSize: "15px", fontFamily: "Lato" }}
              >
                10:00 - 18:00, Mon - Sat
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={6} sm={4} md={2}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontSize: "20px", fontFamily: "Quicksand" }}
          >
            Company
          </Typography>
          {[
            "About Us",
            "Delivery Information",
            "Privacy Policy",
            "Terms & Conditions",
            "Contact Us",
            "Support Center",
            "Careers",
          ].map((text, i) => (
            <Typography
              variant="body2"
              key={i}
              sx={{ color: "#666", fontSize: "15px", fontFamily: "Lato" }}
            >
              {text}
            </Typography>
          ))}
        </Grid>

        <Grid item xs={6} sm={4} md={2}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontSize: "20px", fontFamily: "Quicksand" }}
          >
            Account
          </Typography>
          {[
            "Sign In",
            "View Cart",
            "My Wishlist",
            "Track My Order",
            "Help Ticket",
            "Shipping Details",
            "Compare Products",
          ].map((text, i) => (
            <Typography
              variant="body2"
              key={i}
              sx={{ color: "#666", fontSize: "15px", fontFamily: "Lato" }}
            >
              {text}
            </Typography>
          ))}
        </Grid>

        <Grid item xs={6} sm={4} md={2}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontSize: "20px", fontFamily: "Quicksand" }}
          >
            Corporate
          </Typography>
          {[
            "Become a Vendor",
            "Affiliate Program",
            "Farm Business",
            "Farm Careers",
            "Our Suppliers",
            "Accessibility",
            "Promotions",
          ].map((text, i) => (
            <Typography
              variant="body2"
              key={i}
              sx={{ color: "#666", fontSize: "15px", fontFamily: "Lato" }}
            >
              {text}
            </Typography>
          ))}
        </Grid>

        <Grid item xs={6} sm={6} md={2}>
          <Box sx={{ minWidth: 0 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontSize: "20px", fontFamily: "Quicksand" }}
            >
              Popular
            </Typography>
            {[
              "Milk & Flavoured Milk",
              "Butter & Margarine",
              "Eggs Substitutes",
              "Marmalades",
              "Sour Cream",
              "Tea & Kombucha",
              "Cheese",
            ].map((text, i) => (
              <Typography
                variant="body2"
                key={i}
                sx={{ color: "#666", fontSize: "15px", fontFamily: "Lato" }}
              >
                {text}
              </Typography>
            ))}
          </Box>
        </Grid>

        <Grid item xs={6} sm={4} md={2}>
          <Box sx={{ minWidth: 0 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontSize: "20px", fontFamily: "Quicksand" }}
            >
              Install App
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#666", fontSize: "15px" }}
            >
              From App Store or Google Play
            </Typography>
            <Stack direction="row" spacing={1} mt={1}>
              <Box
                component="img"
                src={Images.FooterAppStore}
                alt="App Store"
                sx={{ width: 80 }}
              />
              <Box
                component="img"
                src={Images.FooterGooglePay}
                alt="Google Pay"
                sx={{ width: 80 }}
              />
            </Stack>
            <Typography
              variant="body2"
              mt={2}
              sx={{ color: "#666", fontSize: "15px" }}
            >
              Secured Payment Gateways
            </Typography>
            <Box
              component="img"
              src={Images.FooterPayment}
              alt="Payments"
              sx={{ width: "100%", maxWidth: 150, mt: 1 }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer3;
