import React, { useState } from 'react';
import { Box, Stack, Pagination, Snackbar, Alert } from '@mui/material'; 
import { useSelector, useDispatch } from 'react-redux';
import ListComponent from './ListComponent';
import PopularProductData from '../../../Home2/PopularProductData';
import DealsOfDay from '../Shop-grid-right-siderber/Deals/Deals';
import { addToCart } from '../../../Redux/cartActions';

const ITEMS_PER_PAGE = 4;

const LeftComponent = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const selectedCategory = useSelector(state => state.selectedCategory || 'All');
  const searchQuery = useSelector(state => state.query || '');
  const priceRange = useSelector(state => state.priceRange || [0, 2000]);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setSnackbarMsg(`${product.title} added to cart!`);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const filteredProducts = PopularProductData.filter(product => {
    const matchesCategory =
      selectedCategory === 'All' ||
      (product?.category &&
        product.category.toLowerCase().trim() === selectedCategory.toLowerCase().trim());

    const matchesSearch =
      !searchQuery ||
      (product?.title &&
        product.title.toLowerCase().includes(searchQuery.toLowerCase()));

    const productPrice = parseFloat(product?.price) || 0;
    const matchesPrice = productPrice >= priceRange[0] && productPrice <= priceRange[1];

    return matchesCategory && matchesSearch && matchesPrice;
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
                onAddToCart={() => handleAddToCart(product)} // ✅ Add handler
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

      {/* ✅ Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {snackbarMsg}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default LeftComponent;
