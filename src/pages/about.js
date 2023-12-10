import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import BasicTextModule from "../components/BasicTextModule/BasicTextModule";
import Seo from "../components/SEO";
import SimpleBanner from "../components/SimpleBanner/SimpleBanner";
import Testimonials from "../components/TestimonialModule/Testimonials";
import { aboutcontent } from "../constants/about";

const content = aboutcontent;

const about = () => {
  return (
    <>
      <Seo title="About" />
      <Layout>
        <SimpleBanner
          title="About Me"
          sub="Photo by Noah Wallace"
          height="100vh"
        >
          <StaticImage
            className="banner__image"
            src="../images/xgames.webp"
            alt="filming at Xgames"
            style={{ backgroundPosition: "75% 80%" }}
          />
        </SimpleBanner>
        <BasicTextModule
          contents={content}
          link="/services"
          linkText="My Services"
        />
        <Testimonials title="Testimonials"></Testimonials>
      </Layout>
    </>
  );
};

export default about;
