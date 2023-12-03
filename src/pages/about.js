import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import BasicTextModule from "../components/BasicTextModule/BasicTextModule";
import Seo from "../components/SEO";
import SimpleBanner from "../components/SimpleBanner/SimpleBanner";

const aboutcontent = [
  "I’m a specialist snow sports videographer working with elite athletes and brands to produce social media content. I’m passionate about getting the best shot possible, coming up with ideas that resonate with social media audiences and presenting this content so that it reaches the widest audience possible.",
  "I started filming out of curiosity on my first season in Whistler in 19/20. This lead to working full time for Snowboard Addiction helping them create primarily educational content on multiple platforms. This is where I learned about the power of effective packaging, hooks and content value and how this leads to better performance for social media content.",
  "The following season I worked with Canadian Team Skier, Bruce Oldham to produce lifestyle  content for his own personal platforms and his sponsors. I also had the opportunity to film for Megan Oldham’s Triple Cork project at X Games Aspen - still under production.",
];

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
          contents={aboutcontent}
          link="/services"
          linkText="My Services"
        />
      </Layout>
    </>
  );
};

export default about;
