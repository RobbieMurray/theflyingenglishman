import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import videoHero from "../videos/Hero2.mp4"

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
              src={videoHero}
              autoPlay
              loop
              muted
            />
          }
        />
      </Layout>
    </>
  )
}

export default Index
