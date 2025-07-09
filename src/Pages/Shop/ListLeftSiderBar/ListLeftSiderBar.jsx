
import React from 'react';
import { Box } from '@mui/material';
import LeftComponent from '../ListRightSiderBar/LeftComponent';
import Filter from '../Shop-grid-right-siderber/Filter/Filter';
import Category from '../../Blog/Category/Category';
import Trending from '../../Blog/Trending/Trending';
import Footer1 from '../../../Components/Shell/Footer/Footer1/Footer1';

const ListRightSideBar = () => {
  return (
    <Box sx={{ px: 3, py: 6 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
       
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: '100%', md: 300 },
            width: '100%',
            position: { xs: 'relative', md: 'sticky' },
            top: 100,
            alignSelf: 'flex-start',
          }}
        >
          <Box sx={{ height: 48, mb: 2 }} />
          <Category />
          <Filter />
          <Trending />
        </Box>

      
        <Box sx={{ flex: 3, width: '100%' }}>
          <LeftComponent />
        </Box>
      </Box>
      <Footer1 />
    </Box>
  );
};

export default ListRightSideBar;
