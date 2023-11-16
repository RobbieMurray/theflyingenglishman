import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import BasicTextModule from "../components/BasicTextModule/BasicTextModule";
import Seo from "../components/SEO";
import SimpleBanner from "../components/SimpleBanner/SimpleBanner";

const contact = () => {
  return (
    <>
      <Seo title="About" />
      <Layout>
        <SimpleBanner title="About Me" sub="Photo by Noah Wallace">
          <StaticImage
            className="banner__image"
            src="../images/xgames.webp"
            alt="filming at Xgames"
            style={{ backgroundPosition: "75% 80%" }}
          />
        </SimpleBanner>
        <BasicTextModule
          title=""
          content="I’m an international snowsports videographer, currently based out of the UK. I film around Europe, North America, and Australia, creating content for YouTube, commercial companies, and events such as XGames."
        />
        <BasicTextModule
          title="Services"
          content="I’m available to book for shooting on location, follow cams, and drone footage, as well as YouTube consulting. This involves helping clients on developing a deeper understanding of their audience and how to appeal to their interests. 
Any further questions, please inquire below."
          link="/contact"
          linkText="Contact Me"
        />
      </Layout>
    </>
  );
};

export default contact;
