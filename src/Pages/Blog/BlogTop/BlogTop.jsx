import React from 'react';
import BlogTopComponent from './BlogTopComponent';
import Images from "../../../Assets/Images";
import { IoHomeOutline } from "react-icons/io5";

const BlogTop = () => {
  return (
    <div>
      <BlogTopComponent
        backgroundImage={Images.BlogBG}
        title="Blog & News"
        text={
          <>
            <IoHomeOutline style={{ verticalAlign: "middle", color: "#3BB77E" }} /> Home &gt; Blog & News
          </>
        }
        buttons={[
          { label: "Shopping" },
          { label: "Recipies" },
          { label: "Kitchen" },
          { label: "News" },
          { label: "Food" },
        ]}
      />
    </div>
  );
};

export default BlogTop;
