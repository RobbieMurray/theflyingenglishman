import * as React from "react";
import { SimpleBannerStyles } from "./SimpleBannerStyles";

const SimpleBanner = ({ children, title, sub, height }) => {
  return (
    <SimpleBannerStyles style={{ height: { height } }}>
      {children}

      {title && (
        <div className="container">
          <div className="banner__content">
            <span>
              <h1>
                {title}
                <span style={{ color: "var(--primary)" }}>.</span>
              </h1>
            </span>
            <p>{sub}</p>
          </div>
        </div>
      )}
      <div className="gradient"></div>
    </SimpleBannerStyles>
  );
};

export default SimpleBanner;
