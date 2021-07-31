import React, { useEffect, useState } from "react";
import ProductComponent from "./ProductComponent";
import axios from "axios";

function Bloglist() {
  //axios to get the Blog
  const [blogList, setBloglist] = useState([]);
  useEffect(() => {
    axios
      .get("https://myways-backend.herokuapp.com/api/getblogs")
      .then((response) => {
        setBloglist(response.data);
        return blogList;
      })
      .catch((error) => {
        console.log(error);
      });
  }, [blogList]);

  return (
    <div>
      <div>
        <h1 className="text-4xl mt-10 font-bold leading-tight mb-7 text-center capitalize">
          Our blogs
        </h1>
        <div className="flex flex-wrap mt-16 mb-28 mx-6">
          {blogList.map((blog) => (
            <ProductComponent key={blog._id} product={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bloglist;
