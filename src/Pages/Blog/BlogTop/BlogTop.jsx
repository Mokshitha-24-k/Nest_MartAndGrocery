import React from 'react';
import BlogTopComponent from './BlogTopComponent';
import Images from "../../../Assets/Images"

const BlogTop = () => {
  return (
    <div>
        <BlogTopComponent
        backgroundImage={Images.BlogBG}
        title="Blog & News"
        text=" Home > Blog & News"
        buttons={[
            {label:"Shopping"},
            {label:"Recipies"},
            {label:"Kitchen"},
            {label:"News"},
            {label:"Food"}
        ]}
        />
      
    </div>
  )
}

export default BlogTop
