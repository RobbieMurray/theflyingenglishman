import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const About = () => (
  <Layout>
    <Seo title="About" />
    <h1>Hi</h1>
    <p>My name is Robbie and I like to ski and film</p>
    <StaticImage
      src="../images/me.png"
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="the flying englishman filming"
      layout="CONSTRAINED"
      margin="150px"
    />
  </Layout>
)

export default About
