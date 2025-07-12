import React, { useState } from 'react';
import { Box, Stack, Pagination } from '@mui/material';
import { useSelector } from 'react-redux';
import ListComponent from './ListComponent';
import PopularProductData from '../../../Home2/PopularProductData';
import DealsOfDay from '../Shop-grid-right-siderber/Deals/Deals';

const ITEMS_PER_PAGE = 4;

const LeftComponent = () => {
  const [page, setPage] = useState(1);
  const selectedCategory = useSelector(state => state.selectedCategory);
  const searchQuery = useSelector(state => state.query); 


  const filteredProducts = PopularProductData.filter(product => {
    const matchesCategory =
      selectedCategory === 'All' ||
      (product?.category &&
        product.category.toLowerCase().trim() === selectedCategory.toLowerCase().trim());

    const matchesSearch =
      !searchQuery ||
      (product?.title &&
        product.title.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box>
      <Box sx={{ px: { xs: 2, sm: 4 }, py: 4 }}>
        <Stack spacing={4}>
          {currentItems.length > 0 ? (
            currentItems.map((product) => (
              <ListComponent
                key={product.id}
                discount={product.discount}
                discountBG={product.discountBG}
                image={product.image}
                category={product.category}
                title={product.title}
                rating={product.rating}
                weight={product.weight}
                price={product.price}
                oldPrice={product.oldPrice}
                text={product.text}
              />
            ))
          ) : (
            <p style={{ textAlign: 'center' }}>No products found.</p>
          )}
        </Stack>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
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
      </Box>

      <Box>
        <DealsOfDay />
      </Box>
    </Box>
  );
};

export default LeftComponent;
