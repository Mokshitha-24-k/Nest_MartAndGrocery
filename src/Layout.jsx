import React from 'react'
import Home2 from '../src/Home2/Home2'
import MainHeaderBar from './Components/Shell/Header/HeaderComponents/MainHeaderBar/MainHeaderBar'
import NavMenuBar from './Components/Shell/Header/HeaderComponents/NavMenuBar/NavMenuBar'
import Footer from './Components/Shell/Footer/Footer'
import { Outlet } from 'react-router-dom'
import TopUtilityBar from './Components/Shell/Header/HeaderComponents/TopUtilityBar/TopUtilityBar'
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Blog from "./Pages/Blog/Blog"
const Layout = () => {
  return (
    <div>
      <TopUtilityBar />
  <MainHeaderBar />
  <NavMenuBar />
      {/* <Home2 /> */}
      {/* <Outlet /> */}
      {/* <About /> */}
      {/* <Contact /> */}
      <Blog />
      
      <Footer />
    </div>
  )
}

export default Layout
