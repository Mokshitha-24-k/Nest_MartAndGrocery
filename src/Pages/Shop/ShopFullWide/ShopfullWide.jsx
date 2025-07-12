import React, { useState, useEffect } from 'react';
import PopularProductData from '../../../Home2/PopularProductData';
import PopularProductCard from '../../../Components/Common/PopularProductCard/PopularProductcard';
import { Box, Pagination } from "@mui/material";
import DealsOfDay from '../Shop-grid-right-siderber/Deals/Deals';
import Footer1 from '../../../Components/Shell/Footer/Footer1/Footer1';
import { useSelector } from 'react-redux';

const ITEMS_PER_PAGE = 15;

const ShopfullWide = () => {
  const [page, setPage] = useState(1);

  const query = useSelector((state) => state.query);

  // Reset to page 1 when query changes
  useEffect(() => {
    setPage(1);
  }, [query]);

  // Filter products by search query
  const filteredProducts = PopularProductData.filter((product) =>
    product?.title?.toLowerCase().includes(query?.toLowerCase() || "")
  );

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{ pt: 4 }}>
      <div className="product-list-container">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
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
          ))
        ) : (
          <p style={{ textAlign: 'center', padding: '2rem' }}>No products found.</p>
        )}
      </div>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 10 }}>
        <Pagination
          count={Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)}
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
