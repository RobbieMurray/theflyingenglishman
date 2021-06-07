import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { Container, Carousel } from "react-bootstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"
//TODO Proper import of bootstrap css?
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import "./index.css"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <Container>
      <Carousel className="desktopPhotos">
        {data.galleryPhotos.edges.map(image => (
          <Carousel.Item key={image.node.id} interval={1000}>
            <GatsbyImage
              image={image.node.childImageSharp.gatsbyImageData}
              alt={image.node.base.split(".")[0]}
            />
          </Carousel.Item>
        ))}
      </Carousel>
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
    </Container>
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
