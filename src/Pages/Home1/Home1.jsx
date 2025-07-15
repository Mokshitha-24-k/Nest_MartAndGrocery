import React, { useState } from "react";
import { Box, Snackbar, Alert } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryFilter, addToCart } from "../../Redux/cartActions";

import Category from "../Blog/Category/Category";
import Trending from "../Blog/Trending/Trending";
import Footer1 from "../../Components/Shell/Footer/Footer1/Footer1";
import Filter from "../Shop/Shop-grid-right-siderber/Filter/Filter";
import ReusableCarousel from "../../Components/Common/Carousel/Carousel";
import { slidesData, promoCards } from "../../Home2/Home2";
import PopularProductCard from "../../Components/Common/PopularProductCard/PopularProductcard";
import "../../Home2/Home2.css";
import PopularProductData from "../../Home2/PopularProductData";
import DealsOfDay from "../Shop/Shop-grid-right-siderber/Deals/Deals";
import AddsCard from "../../Components/Common/AddsCard/AddsCard";
import FourCardSection from "../../Components/Common/TopSells/FourCardSection";
import { categories } from "../Blog/Category/Category";
import CategoryGrid from "./CategoryGrid/CategoryGrid";

const Home1 = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.selectedCategory || "All"
  );
  const priceRange = useSelector((state) => state.priceRange || [0, 2000]);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");

  const handleCategoryClick = (category) => {
    dispatch(setCategoryFilter(category));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setSnackbarMsg(`${product.title} added to cart`);
    setSnackbarOpen(true);
  };

  const filteredProducts = PopularProductData.filter((product) => {
    const inCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    const price = parseFloat(product.price) || 0;
    const inPriceRange = price >= priceRange[0] && price <= priceRange[1];

    return inCategory && inPriceRange;
  });

  return (
    <Box sx={{ px: 3, py: 6, width: "100%", mx: "auto" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
        }}
      >
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", md: 300 },
            position: { xs: "static", md: "sticky" },
            top: 100,
            alignSelf: "flex-start",
            zIndex: 1,
          }}
        >
          <Box sx={{ height: 48, mb: 2 }} />
          <Category />
          <Filter />
          <Trending />
        </Box>

        <Box sx={{ flex: 3, width: "100%" }}>
          <ReusableCarousel slides={slidesData} />

          <div className="Pop">
            <div>
              <span className="Heading">
                <h3>Popular Products</h3>
              </span>
            </div>
            <div className="Pop-Links">
              {[
                "All",
                "Milks & Dairies",
                "Clothing",
                "Pet Foods",
                "Baking Material",
                "Fresh Fruit",
              ].map((cat) => (
                <a
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  style={{
                    cursor: "pointer",
                    color: selectedCategory === cat ? "#fff" : "#000",
                    backgroundColor:
                      selectedCategory === cat ? "#3BB77E" : "transparent",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    transition: "all 0.3s",
                    fontWeight: 500,
                  }}
                >
                  {cat}
                </a>
              ))}
            </div>
          </div>

          <div
            className="product-list-container"
            style={{
              marginTop: "20px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
            }}
          >
            {filteredProducts.map((product) => (
              <PopularProductCard
                key={product.id}
                {...product}
                onAddToCart={() => handleAddToCart(product)}
              />
            ))}
          </div>

          <DealsOfDay />

          <div className="promo-card-container">
            {promoCards.map((card, index) => (
              <AddsCard
                key={index}
                image={card.image}
                text={card.text}
                onClick={() => alert(`Clicked ${card.text}`)}
              />
            ))}
          </div>
        </Box>
      </Box>

      <CategoryGrid categories={categories} />
      <div style={{ width: "100%", margin: "50px auto 0" }}>
        <FourCardSection />
      </div>

      <Footer1 />

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {snackbarMsg}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Home1;
