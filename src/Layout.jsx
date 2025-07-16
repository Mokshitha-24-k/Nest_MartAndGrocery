import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import MainHeaderBar from "./Components/Shell/Header/HeaderComponents/MainHeaderBar/MainHeaderBar";
import NavMenuBar from "./Components/Shell/Header/HeaderComponents/NavMenuBar/NavMenuBar";
import Footer from "./Components/Shell/Footer/Footer";
import TopUtilityBar from "./Components/Shell/Header/HeaderComponents/TopUtilityBar/TopUtilityBar";

const Layout = () => {
  const location = useLocation();

  // Hide these components on login or signup paths
  const hideComponentsOnPaths = ["/login", "/signup"];

  const shouldHide = hideComponentsOnPaths.includes(location.pathname);

  return (
    <div>
      {!shouldHide && <TopUtilityBar />}
      <MainHeaderBar />
      {!shouldHide && <NavMenuBar />}

      <Outlet />

      {!shouldHide && <Footer />}
    </div>
  );
};

export default Layout;
