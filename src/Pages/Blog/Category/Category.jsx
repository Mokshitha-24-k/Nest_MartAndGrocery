import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryFilter } from '../../../Redux/cartActions';
import Images from '../../../Assets/Images';

export const categories = [
  { label: 'All', img: Images.BlogHead, count: 20 },
  { label: 'Milks & Dairies', img: Images.BlogHead, count: 3 },
  { label: 'Clothing', img: Images.Blog_Clothing, count: 4 },
  { label: 'Pet Foods', img: Images.Blog_Pet, count: 3 },
  { label: 'Baking material', img: Images.Blog_Baking, count: 3 },
  { label: 'Fresh Fruit', img: Images.Blog_Fruit, count: 2 },
];

const Catergory = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.selectedCategory);

  const handleCategoryClick = (category) => {
    dispatch(setCategoryFilter(category));
  };

  return (
    <Box
      sx={{
        width: { xs: '100%', md: '300px' },
        borderRadius: '16px',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        p: 3,
        marginBottom: '20px',
      }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          color="#253D4E"
          sx={{ mb: 1, textAlign: 'left' }}
        >
          Category
        </Typography>

        <Box sx={{ position: 'relative', height: '4px' }}>
          <Box
            sx={{
              width: '100%',
              height: '2px',
              backgroundColor: '#ECECEC',
              borderRadius: '4px',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '25%',
              height: '5px',
              backgroundColor: '#3BB77E',
              borderRadius: '4px',
            }}
          />
        </Box>
      </Box>

      <Stack spacing={2}>
        {categories.map((item, idx) => (
          <Box
            key={idx}
            onClick={() => handleCategoryClick(item.label)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              border: '1px solid #ECECEC',
              borderRadius: '12px',
              px: 2,
              py: 1.2,
              transition: 'all 0.3s ease',
              backgroundColor:
                selectedCategory === item.label ? '#D2F4E3' : '#fff',
              '&:hover': {
                backgroundColor:
                  selectedCategory === item.label ? '#C8EEDB' : '#F9F9F9',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transform: 'translateY(-2px)',
                cursor: 'pointer',
              },
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                component="img"
                src={item.img}
                alt={item.label}
                sx={{ width: 40, height: 40 }}
              />
              <Typography
                variant="body1"
                fontWeight="500"
                color="#253D4E"
                sx={{ fontSize: '14px' }}
              >
                {item.label}
              </Typography>
            </Stack>

            <Box
              sx={{
                width: 26,
                height: 26,
                borderRadius: '50%',
                backgroundColor: '#BCE3C9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '13px',
                fontWeight: 600,
                color: '#253D4E',
              }}
            >
              {item.count}
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Catergory;
