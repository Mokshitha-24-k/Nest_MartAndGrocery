import React from 'react';
import { Box, Typography, Stack, Button, Divider, Chip, Rating } from '@mui/material';
import { useParams } from 'react-router-dom';
import PopularProductData from '../data/PopularProductData';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const SingleProduct = () => {
  const { id } = useParams();
  const product = PopularProductData.find((item) => item.id === parseInt(id));

  if (!product) return <Typography>Product Not Found</Typography>;

  return (
    <Box sx={{ padding: '40px 5%', display: 'flex', flexDirection: 'column', gap: 4 }}>
      {/* Main Section */}
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
        {/* Images */}
        <Box sx={{ flex: 1 }}>
          <img
            src={product.image}
            alt={product.title}
            style={{ width: '100%', borderRadius: 10 }}
          />
          <Stack direction="row" spacing={2} mt={2}>
            <img src={product.image2} alt="thumb2" style={{ width: 80, borderRadius: 8 }} />
            <img src={product.image3} alt="thumb3" style={{ width: 80, borderRadius: 8 }} />
          </Stack>
        </Box>

        {/* Product Info */}
        <Box sx={{ flex: 2 }}>
          <Chip label={product.discount} sx={{ backgroundColor: product.discountBG, color: '#fff' }} />
          <Typography variant="h5" mt={1}>{product.title}</Typography>
          <Stack direction="row" alignItems="center" spacing={1} mt={1}>
            <Rating value={product.rating} precision={0.5} readOnly />
            <Typography variant="body2">({product.rating})</Typography>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center" mt={2}>
            <Typography variant="h5" color="primary">${product.price}</Typography>
            <Typography variant="body1" sx={{ textDecoration: 'line-through', color: '#888' }}>
              ${product.oldPrice}
            </Typography>
          </Stack>

          <Typography mt={2} color="text.secondary">{product.text}</Typography>

          <Typography mt={2}><strong>Brand:</strong> {product.brand}</Typography>
          <Typography><strong>Category:</strong> {product.category}</Typography>
          <Typography><strong>Weight:</strong> {product.weight}</Typography>
          <Typography><strong>Stock:</strong> {product.stockStatus}</Typography>

          <Button
            variant="contained"
            color="success"
            startIcon={<ShoppingCartIcon />}
            sx={{ mt: 3, px: 4 }}
          >
            Add to Cart
          </Button>
        </Box>
      </Stack>

      {/* Divider */}
      <Divider />

      {/* Tabs / Details Section */}
      <Box>
        <Typography variant="h6" gutterBottom>Description</Typography>
        <Typography color="text.secondary">{product.longDescription}</Typography>

        <Typography variant="h6" mt={4}>Shipping Information</Typography>
        <Typography color="text.secondary">{product.shippingInfo}</Typography>

        <Typography variant="h6" mt={4}>Suggested Use</Typography>
        <Typography color="text.secondary">As per package instructions or add to meals.</Typography>

        <Typography variant="h6" mt={4}>Other Ingredients</Typography>
        <Typography color="text.secondary">100% certified organic quinoa.</Typography>

        <Typography variant="h6" mt={4}>Warnings</Typography>
        <Typography color="text.secondary">Keep in a cool, dry place. Reseal after use.</Typography>
      </Box>
    </Box>
  );
};

export default SingleProduct;
