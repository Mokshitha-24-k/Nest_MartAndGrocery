import React, { useRef, useEffect, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import Images from "../../../Assets/Images";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const Welcome = () => {
  const sliderRef = useRef(null);
  const rightRef = useRef(null);
  const [rightHeight, setRightHeight] = useState("auto");

  const sliderImages = [
    Images.Slider1,
    Images.Slider2,
    Images.Slider3,
    Images.Slider1,
    Images.Slider2,
    Images.Slider3,
  ];

  const updateHeight = () => {
    if (rightRef.current) {
      setRightHeight(rightRef.current.offsetHeight);
    }
  };

  useEffect(() => {
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollBy({
        left: -containerWidth / 3,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollBy({
        left: containerWidth / 3,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box sx={{ py: 6, overflowX: "hidden" }}>
      <Box
        sx={{
          width: "100%",
       
          mx: "auto",
          px: { xs: 2, sm: 4, md: 6 },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          flexWrap: "wrap",
          gap: 4,
          alignItems: "flex-start",
        }}
      >
        
        <Box
          sx={{
            flex: 1,
            width: "100%",
            minWidth: { xs: "100%", sm: "300px" },
          }}
        >
          <Box
            component="img"
            src={Images.AboutPic}
            alt="About"
            sx={{
              width: "100%",
              height: { xs: 250, sm: rightHeight }, // Responsive height match
              borderRadius: 2,
              objectFit: "cover",
              transition: "height 0.3s ease",
            }}
          />
        </Box>

        {/* Right - Text and Slider */}
        <Box ref={rightRef} sx={{ flex: 1, width: "100%" }}>
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{
              color: "#222",
              mb: 2,
              position: "relative",
              display: "inline-block",
            }}
          >
            Welcome to Nest
            <Box
              sx={{
                position: "absolute",
                bottom: -6,
                left: 0,
                height: 3,
                width: "40%",
                borderRadius: 2,
                backgroundColor: "#2db94d",
              }}
            />
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mb: 3,
              lineHeight: 1.7,
              wordBreak: "break-word",
              whiteSpace: "pre-wrap",
            }}
          >
            Nest Mart is your trusted online destination for fresh groceries and
            everyday essentials. From fruits, vegetables, and dairy to snacks,
            beverages, and household items, we bring a wide range of quality
            products right to your doorstep with fast, reliable delivery.
            <br />
            <br />
            We focus on convenience, affordability, and freshness — helping you
            save time while enjoying top brands and handpicked produce.
          </Typography>

          
          <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
            <IconButton
              onClick={scrollLeft}
              sx={{
                position: "absolute",
                left: -20,
                zIndex: 1,
                bgcolor: "#fff",
                boxShadow: 1,
                "&:hover": { bgcolor: "#f0f0f0" },
              }}
            >
              <ChevronLeft />
            </IconButton>

            <Box
              ref={sliderRef}
              sx={{
                display: "flex",
                overflow: "hidden",
                width: "100%",
                maxWidth: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                {sliderImages.map((img, index) => (
                  <Box
                    key={index}
                    component="img"
                    src={img}
                    alt={`slider-${index}`}
                    sx={{
                      flexShrink: 0,
                      width: "calc((100% - 16px * 2) / 3)",
                      height: { xs: 100, sm: 120, md: 140 },
                      borderRadius: 2,
                      objectFit: "cover",
                    }}
                  />
                ))}
              </Box>
            </Box>

            <IconButton
              onClick={scrollRight}
              sx={{
                position: "absolute",
                right: -20,
                zIndex: 1,
                bgcolor: "#fff",
                boxShadow: 1,
                "&:hover": { bgcolor: "#f0f0f0" },
              }}
            >
              <ChevronRight />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
