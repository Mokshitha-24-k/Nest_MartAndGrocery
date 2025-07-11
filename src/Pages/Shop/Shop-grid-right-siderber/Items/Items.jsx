import React from 'react';
import { useSelector } from 'react-redux';
import PopularProductCard from "../../../../Components/Common/PopularProductCard/PopularProductcard";
import PopularProductData from "../../../../Home2/PopularProductData";

const Items = () => {
  const selectedCategory = useSelector((state) => state.selectedCategory);

  const filteredProducts =
    selectedCategory === "All"
      ? PopularProductData
      : PopularProductData.filter(
          (product) =>
            product.category.toLowerCase().trim() ===
            selectedCategory.toLowerCase().trim()
        );

  return (
    <div className="product-list-container">
      {filteredProducts.map((product) => (
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
      ))}
    </div>
  );
};

export default Items;
