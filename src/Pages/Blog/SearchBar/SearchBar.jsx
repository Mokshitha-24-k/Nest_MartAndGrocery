// Inside SearchBar.jsx
import React from 'react';
import { Box, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #ECECEC',
        borderRadius: '8px',
        px: 2,
        height: 48, // ✅ Set fixed height to match heading
        width: '100%',
        backgroundColor: '#fff',
      }}
    >
      <InputBase
        placeholder="Search"
        sx={{
          flex: 1,
          fontSize: 16,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
      <SearchIcon sx={{ color: '#3BB77E', fontSize: 24 }} />
    </Box>
  );
};

export default SearchBar;
