import React, { useState, useEffect } from 'react';
import PopularProductData from '../../../Home2/PopularProductData';
import PopularProductCard from '../../../Components/Common/PopularProductCard/PopularProductcard';
import { Box, Pagination, Snackbar, Alert } from "@mui/material";
import DealsOfDay from '../Shop-grid-right-siderber/Deals/Deals';
import Footer1 from '../../../Components/Shell/Footer/Footer1/Footer1';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../../Redux/cartActions';

const ITEMS_PER_PAGE = 15;

const ShopfullWide = () => {
  const [page, setPage] = useState(1);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');

  const dispatch = useDispatch();
  const query = useSelector((state) => state.query);

  useEffect(() => {
    setPage(1); 
  }, [query]);

  const filteredProducts = PopularProductData.filter((product) =>
    product?.title?.toLowerCase().includes(query?.toLowerCase() || "")
  );

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setSnackbarMsg(`${product.title} added to cart`);
    setSnackbarOpen(true);
  };

  return (
    <Box sx={{ pt: 4 }}>
      <div className="product-list-container">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <PopularProductCard
              key={product.id}
              {...product}
              onAddToCart={() => handleAddToCart(product)}
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

    
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
          {snackbarMsg}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ShopfullWide;
