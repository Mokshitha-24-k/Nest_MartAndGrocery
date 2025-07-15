import React from "react";
import { useSelector } from "react-redux";
import PopularProductCard from "../../../../Components/Common/PopularProductCard/PopularProductcard";
import PopularProductData from "../../../../Home2/PopularProductData";

const Items = ({ onAddToCart }) => {
  const selectedCategory = useSelector((state) => state.selectedCategory || "All");
  const searchQuery = useSelector((state) => state.query || "");
  const priceRange = useSelector((state) => state.priceRange || [0, 2000]);

  const filteredProducts = PopularProductData.filter((product) => {
    const title = product?.title?.toLowerCase() || "";
    const category = product?.category?.toLowerCase() || "";
    const price = parseFloat(product?.price) || 0;

    const categoryMatch =
      selectedCategory === "All" || category === selectedCategory.toLowerCase().trim();

    const searchMatch = title.includes(searchQuery.toLowerCase().trim());
    const priceMatch = price >= priceRange[0] && price <= priceRange[1];

    return categoryMatch && searchMatch && priceMatch;
  });

  return (
    <div className="product-list-container">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <PopularProductCard key={product.id} {...product} onAddToCart={onAddToCart} />
        ))
      ) : (
        <p style={{ textAlign: "center", padding: "2rem" }}>No products found.</p>
      )}
    </div>
  );
};

export default Items;
