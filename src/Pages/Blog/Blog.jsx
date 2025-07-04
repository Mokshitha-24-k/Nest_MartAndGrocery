import React from 'react';
import BlogTop from "./BlogTop/BlogTop";
import Footer1 from '../../Components/Shell/Footer/Footer1/Footer1';
import Recipies from "./RecipsArticals/Recipies"


const Blog = () => {
  return (
    <div>
      <BlogTop />
      <Recipies />
      <Footer1 />
    </div>
  )
}

export default Blog
