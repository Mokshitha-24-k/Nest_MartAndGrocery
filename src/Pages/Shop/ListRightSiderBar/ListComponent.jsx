import React from 'react';
import { Box, Typography, Stack, Button, Rating } from '@mui/material';

const ListComponent = ({
  discount,
  discountBG,
  image,
  category,
  title,
  rating,
  weight,
  text,
  price,
  oldPrice,
}) => {
  return (
    <Box
      sx={{
        position: 'relative', 
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 3,
        border: '1px solid #ECECEC',
        borderRadius: '15px',
        margin: 0,
        p: { xs: 2, sm: 3 },
        backgroundColor: '#fff',
        alignItems: { xs: 'center', sm: 'flex-start' },
        width: '100%',
      }}
    >

      {discount && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: discountBG || '#F74B81',
            color: '#fff',
            px: 1.5,
            py: 0.5,
            fontSize: 16,
            borderRadius: '14px 0 14px 0',
            zIndex: 2,
            borderTopLeftRadius: '15px', 
          }}
        >
          {discount}
        </Box>
      )}

      
      <Box>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: { xs: 120, sm: 140 },
            height: { xs: 120, sm: 140 },
            objectFit: 'contain',
            borderRadius: '10px',
          }}
        />
      </Box>

    
      <Box sx={{ flex: 1, width: '100%' }}>
        <Typography
          variant="caption"
          sx={{
            fontSize: 14,
            fontWeight: 500,
            color: '#ADADAD',
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          {category}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontSize: 20,
            fontWeight: 700,
            color: '#253D4E',
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 500,
            color: '#7E7E7E',
            mb: 1,
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          {weight}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent={{ xs: 'center', sm: 'flex-start' }}
          flexWrap="wrap"
          mb={1}
        >
          <Rating
            name="read-only"
            value={rating}
            precision={0.5}
            size="small"
            readOnly
            sx={{ color: '#FFD700' }}
          />
          <Typography sx={{ fontSize: 14, color: '#ADADAD' }}>
            ({rating})
          </Typography>
        </Stack>

        <Typography
          variant="body2"
          sx={{
            fontSize: 14,
            color: '#7E7E7E',
            mb: 1,
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          {text}
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent={{ xs: 'center', sm: 'flex-start' }}
          mb={1}
        >
          <Typography
            sx={{ fontSize: 22, fontWeight: 700, color: '#3BB77E' }}
          >
            ${price}
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 500,
              color: '#ADADAD',
              textDecoration: 'line-through',
            }}
          >
            ${oldPrice}
          </Typography>
        </Stack>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          alignItems={{ xs: 'center', sm: 'flex-start' }}
          justifyContent={{ xs: 'center', sm: 'flex-start' }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#3BB77E',
              color: '#fff',
              textTransform: 'none',
              px: 3,
              width: { xs: '100%', sm: 'auto' },
              '&:hover': { backgroundColor: '#329b6d' },
            }}
          >
            Add to Cart
          </Button>
          <Button
            variant="text"
            sx={{
              textTransform: 'none',
              color: '#3BB77E',
              width: { xs: '100%', sm: 'auto' },
            }}
          >
            Add Compare
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ListComponent;
