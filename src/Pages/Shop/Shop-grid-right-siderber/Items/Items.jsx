import React from 'react';
import PopularProductCard from "../../../../Components/Common/PopularProductCard/PopularProductcard";
import PopularProductData from "../../../../Home2/PopularProductData"

const Items = () => {
  return (
    
      <div className="product-list-container">
  {PopularProductData.map((product) => (
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
  )
}

export default Items
