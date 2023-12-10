import React from "react";

import PostItems from "./PostItems";
import PostItem from "./PostItem";
import { testimonialcontent } from "../../constants/testimonials";

const Testimonials = ({ title, introduction }) => {
  const testimonials = testimonialcontent;
  return (
    <div className="section">
      <div className="container container__tight">
        {title || introduction ? (
          <div className="intro__area">
            {title && <h2>{title}</h2>}
            {introduction && <p>{introduction}</p>}
          </div>
        ) : null}

        <PostItems>
          {testimonials.map((node, index) => {
            return <PostItem key={index} node={node} />;
          })}
        </PostItems>
      </div>
    </div>
  );
};

export default Testimonials;
