import React from 'react';
import TopUtilityBar from './HeaderComponents/TopUtilityBar/TopUtilityBar';
import MainHeaderBar from './HeaderComponents/MainHeaderBar/MainHeaderBar';
import NavMenuBar from './HeaderComponents/NavMenuBar/NavMenuBar';

const Header = () => {
  return (
    <div>
      <TopUtilityBar />
      <MainHeaderBar />
      <NavMenuBar />
    </div>
  )
}

export default Header

