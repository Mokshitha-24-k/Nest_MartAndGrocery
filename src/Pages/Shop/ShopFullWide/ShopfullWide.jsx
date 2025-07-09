import React, { useState } from 'react';
import PopularProductData from '../../../Home2/PopularProductData';
import PopularProductCard from '../../../Components/Common/PopularProductCard/PopularProductcard';
import { Box, Pagination } from "@mui/material";
import DealsOfDay from '../Shop-grid-right-siderber/Deals/Deals';
import Footer1 from '../../../Components/Shell/Footer/Footer1/Footer1';

const ITEMS_PER_PAGE = 15;

const ShopfullWide = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentProducts = PopularProductData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <Box sx={{ pt: 4 }}>
    
      <div className="product-list-container">
        {currentProducts.map((product) => (
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

      
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 10 }}>
        <Pagination
          count={Math.ceil(PopularProductData.length / ITEMS_PER_PAGE)}
          page={page}
          onChange={handlePageChange}
          shape="rounded"
          color="success"
          siblingCount={1}
          boundaryCount={1}
        />
      </Box>
      <Box sx={{ mb: 10 }}>
        <DealsOfDay />
      </Box>

      <Footer1 />
    </Box>
  );
};

export default ShopfullWide;
