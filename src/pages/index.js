import * as React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import BannerModule from "../components/BannerModule/BannerModule";
import videoHero from "../videos/hero.mp4";

const Index = () => {
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <BannerModule
          subTitle="Snowsports Videographer"
          children={
            <video
              className="banner__image"
              src={videoHero}
              autoPlay
              loop
              muted
            />
          }
        />
      </Layout>
    </>
  );
};

export default Index;
