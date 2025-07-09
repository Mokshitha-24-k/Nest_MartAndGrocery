import React from 'react';
import BlogTopComponent from '../../../Blog/BlogTop/BlogTopComponent';
import Images from "../../../../Assets/Images";
import { IoHomeOutline } from "react-icons/io5";

const BlogTop = () => {
  return (
    <div>
      <BlogTopComponent
        backgroundImage={Images.BlogBG}
        title="Snack"
        text={
          <>
            <IoHomeOutline style={{ verticalAlign: "middle", color: "#3BB77E" }} /> Home &gt; Shop &gt; Snack
          </>
        }
        buttons={[
          { label: "Cabbage" },
          { label: "Broccoli" },
          { label: "Artichoke" },
          { label: "Celery" },
          { label: "Spinach" },
        ]}
      />
    </div>
  );
};

export default BlogTop;
