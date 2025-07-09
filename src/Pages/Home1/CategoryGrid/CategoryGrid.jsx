import React from 'react';
import { Box, Typography } from '@mui/material';

const CategoryGrid = ({ categories }) => {
  return (
    <Box sx={{ px: 3, py: 4 }}>
      
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          Shop by Categories
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: '#999', cursor: 'pointer', fontSize: 14 }}
        >
          All Categories &gt;
        </Typography>
      </Box>

     
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        {categories.map((category, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: '#F4F6FA',
              borderRadius: '10px',
              padding: '12px',
              textAlign: 'center',
              width: '100%',
              flex: '1 0 calc(12.5% - 16px)', 
              maxWidth: '120px',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
              },
            }}
          >
            <Box
              component="img"
              src={category.img}
              alt={category.label}
              sx={{ width: '48px', height: '48px', marginBottom: '10px' }}
            />
            <Typography variant="body2" fontSize={16}>
              {category.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CategoryGrid;
