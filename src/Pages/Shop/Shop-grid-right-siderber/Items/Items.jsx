import React from 'react';
import { useSelector } from 'react-redux';
import PopularProductCard from "../../../../Components/Common/PopularProductCard/PopularProductcard";
import PopularProductData from "../../../../Home2/PopularProductData";

const Items = () => {
  const selectedCategory = useSelector((state) => state.selectedCategory || "All");
  const searchQuery = useSelector((state) => state.query || "");

  const filteredProducts = PopularProductData.filter((product) => {
    const title = product?.title?.toLowerCase() || "";
    const category = product?.category?.toLowerCase() || "";

    const categoryMatch =
      selectedCategory === "All" ||
      category === selectedCategory.toLowerCase().trim();

    const searchMatch = title.includes(searchQuery.toLowerCase().trim());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="product-list-container">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <PopularProductCard
            key={product.id}
            id={product.id}
            discount={product.discount}
            discountBG={product.discountBG}
            image={product.image}
            category={product.category}
            title={product.title}
            rating={product.rating}
            brand={product.brand}
            price={product.price}
            oldPrice={product.oldPrice}
            stockStatus={product.stockStatus}
            onAddToCart={() => console.log(`Added ${product.title}`)}
          />
        ))
      ) : (
        <p style={{ textAlign: 'center', padding: '2rem' }}>No products found.</p>
      )}
    </div>
  );
};

export default Items;
