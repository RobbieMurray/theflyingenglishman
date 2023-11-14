import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import BannerModule from "../components/BannerModule/BannerModule";
import videoHero from "../videos/hero.mp4";

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          subTitle="Snowsports Videographer"
          children={
            <video
              className="banner__image"
              alt="video showreel"
              src={videoHero}
              autoPlay
              loop
              muted
              defaultMuted
              playsinline
            />
          }
        />
      </Layout>
    </>
  );
};

export default Index;
