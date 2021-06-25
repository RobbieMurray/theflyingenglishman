import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { device } from "../components/device"

const Container = styled.div`
  padding: 1em 2em;

  @media ${device.tablet} {
    padding: 1em 3em;
  }

  @media ${device.laptopL} {
    padding: 1em 4em;
  }
`

const About = () => (
  <Layout>
    <Seo title="About" />
    <Container className="about">
      <h1>Hi</h1>
      <p>My name is Robbie and I like to ski and film.</p>
      <p>For more content check out my social media pages linked below.</p>
      <StaticImage
        src="../images/me.png"
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="the flying englishman filming"
        layout="constrained"
        margin="150px"
      />
    </Container>
  </Layout>
)

export default About
