import * as React from "react";
import Button from "../Button/Button";
import { PostItemStyles } from "./TestimonialStyles";

const BlogItem = ({ node }, key) => {
  const { name, title, testimonial, url } = node;
  const handleClick = (e) => {
    e.preventDefault();

    // Create an anchor element and click it
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    document.body.appendChild(anchor); // Append to the body
    anchor.click(); // Simulate click
    document.body.removeChild(anchor); // Remove the anchor from the body
  };
  return (
    <PostItemStyles key={key} onClick={handleClick}>
      {testimonial && <p>{testimonial}</p>}
      <h4>{name}</h4>
      <p>{title}</p>
      <div className="blogitem__meta">
        <Button as="span" text={"About " + name.split(" ")[0]} arrow={true} />
      </div>
    </PostItemStyles>
  );
};

export default BlogItem;
