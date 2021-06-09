import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container, Carousel } from "react-bootstrap"
import styled from "styled-components"
import { device } from "../components/device"

import Layout from "../components/layout"
import Seo from "../components/seo"
//TODO Proper import of bootstrap css?
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import "../styles/index.css"

const IndexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 2em;

  @media ${device.tablet} {
    padding: 1em 3em;
    .desktopPhotos {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media ${device.laptopL} {
    padding: 1em 4em;
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <IndexContainer>
      <Container className="desktopPhotos">
        <Carousel variant="dark" className="desktopPhotos">
          {data.galleryPhotos.edges.map(image => (
            <Carousel.Item key={image.node.id} interval={1000}>
              <GatsbyImage
                image={image.node.childImageSharp.gatsbyImageData}
                alt={image.node.base.split(".")[0]}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      <div className="mobilePhotos">
        {data.galleryPhotos.edges.map(image => (
          <GatsbyImage
            className="photo"
            key={image.node.id}
            image={image.node.childImageSharp.gatsbyImageData}
            alt={image.node.base.split(".")[0]}
          />
        ))}
      </div>
    </IndexContainer>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    galleryPhotos: allFile(
      filter: {
        relativeDirectory: { eq: "gallery" }
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
      }
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, height: 800)
          }
        }
      }
    }
  }
`
