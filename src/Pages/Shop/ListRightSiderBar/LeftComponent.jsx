import React, { useState } from 'react';
import { Box, Stack, Pagination } from '@mui/material';
import ListComponent from './ListComponent';
import PopularProductData from '../../../Home2/PopularProductData';
import DealsOfDay from '../Shop-grid-right-siderber/Deals/Deals';

const ITEMS_PER_PAGE = 4;

const LeftComponent = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentItems = PopularProductData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <Box>
    
      <Box sx={{ px: { xs: 2, sm: 4 }, py: 4 }}>
        <Stack spacing={4}>
          {currentItems.map((product) => (
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
          ))}
        </Stack>

      
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
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
      </Box>

    
      <Box>
        <DealsOfDay />
      </Box>
    </Box>
  );
};

export default LeftComponent;
