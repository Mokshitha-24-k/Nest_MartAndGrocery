import React, { useState } from "react";
import { Box } from "@mui/material";
import Category from "../Blog/Category/Category";
import Trending from "../Blog/Trending/Trending";
import Footer1 from "../../Components/Shell/Footer/Footer1/Footer1";
import Filter from "../Shop/Shop-grid-right-siderber/Filter/Filter";
import ReusableCarousel from "../../Components/Common/Carousel/Carousel";
import { slidesData } from "../../Home2/Home2";
import PopularProductCard from "../../Components/Common/PopularProductCard/PopularProductcard";
import "../../Home2/Home2.css";
import PopularProductData from "../../Home2/PopularProductData";
import DealsOfDay from "../Shop/Shop-grid-right-siderber/Deals/Deals";
import AddsCard from "../../Components/Common/AddsCard/AddsCard";
import { promoCards } from "../../Home2/Home2";
import FourCardSection from "../../Components/Common/TopSells/FourCardSection";
import { categories } from "../Blog/Category/Category";
import CategoryGrid from "./CategoryGrid/CategoryGrid";

const Home1 = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? PopularProductData
      : PopularProductData.filter(
          (product) => product.category === selectedCategory
        );

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
                "Coffees & Teas",
                "Pet Foods",
                "Meats",
                "Vegetables",
                "Fruits",
              ].map((cat) => (
                <a
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  style={{
                    cursor: "pointer",
                    color: selectedCategory === cat ? "#fff" : "#000",
                    backgroundColor: selectedCategory === cat ? "#3BB77E" : "transparent",
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
            {filteredProducts.slice(0, 8).map((product) => (
              <PopularProductCard
                key={product.id}
                discount={product.discount}
                discountBG={product.discountBG}
                image={product.image}
                category={product.category}
                title={product.title}
                rating={product.rating}
                brand={product.brand}
                price={product.price}
                oldPrice={product.oldPrice}
                onAddToCart={() => console.log(`Added ${product.title}`)}
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
    </Box>
  );
};

export default Home1;
