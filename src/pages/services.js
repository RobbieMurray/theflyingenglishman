import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import BasicTextModule from "../components/BasicTextModule/BasicTextModule";
import Seo from "../components/SEO";
import SimpleBanner from "../components/SimpleBanner/SimpleBanner";

const servicesList = [
  "Follow cams",
  "Viral Shorts Content",
  "Educational Content",
  "Commercial Projects",
  "Social Media Strategy",
  "YouTube Packaging (Titles & Thumbnails)",
];
const contents = [
  "I’m back based in the UK having spent 3 seasons in Whistler and last season travelling to film in resorts in Canada, USA, Europe and Australia. For the 23/24 season, I’ll be available to travel to film in all these locations.",
  "Person, Professional and Commercial sessions are available to be booked incluing:",
];

const services = () => {
  return (
    <>
      <Seo title="Services" />
      <Layout>
        <SimpleBanner title="Services">
          <StaticImage
            className="banner__image"
            src="../images/mountains.webp"
            alt="filming at Xgames"
          />
        </SimpleBanner>

        <BasicTextModule
          title=""
          contents={contents}
          list={servicesList}
          link="/contact"
          linkText="Contact Me"
        />
      </Layout>
    </>
  );
};

export default services;
