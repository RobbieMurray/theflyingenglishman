import * as React from "react";
import { Link } from "gatsby";
import { BannerModuleStyles } from "./BannerModuleStyles";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../Button/Button";

const BannerModule = ({ children, subTitle, enquire }) => {
  return (
    <>
      <BannerModuleStyles>
        {children ? (
          children
        ) : (
          <StaticImage
            className="banner__image"
            imgClassName="banner__image--content"
            src="../../images/xgames.webp" /* - Update with Ski image - */
            alt="Banner Image"
            layout="fullWidth"
            placeholder="blurred"
          />
        )}

        <div className="container">
          <div className="banner__content">
            <StaticImage
              className="banner__logo"
              src="../../logos/tfe-long.svg"
              alt="Perk Image"
              layout="constrained"
              placeholder="tracedSVG"
            />
            <div className="banner__sub">
              {subTitle && <h2>{subTitle}</h2>}
              <div className="banner__btns">
                {enquire && (
                  <Button
                    className="btn"
                    text="Enquire Now"
                    as={Link}
                    to="/contact"
                  />
                )}
                <Button
                  className="btn"
                  text="Learn More"
                  as={Link}
                  to="/about"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="gradient"></div>
      </BannerModuleStyles>
      <span id="topContent"></span>
    </>
  );
};

export default BannerModule;
