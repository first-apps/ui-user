"use client";

import { Button } from "@first-apps/shared/components";

export const PostContainer = ({ data, children }) => {
  const handleClick = () => {
    console.log(data);
    localStorage.setItem("post", JSON.stringify(data));
    // you can perform client side actions here
    // such as add to cart
  };
  // const shouldRender = localStorage.getItem("test");
  return (
    <div>
      <h2>{children}</h2>
      <Button onClick={handleClick}>Print</Button>
    </div>
  );
};
