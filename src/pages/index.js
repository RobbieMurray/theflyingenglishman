import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container, Carousel } from "react-bootstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"
//TODO Proper import of bootstrap css?
import "../../node_modules/bootstrap/dist/css/bootstrap.css"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <p>
      <Link to="/about/">About</Link> <br />
    </p>
    <Container>
      <Carousel>
        {data.galleryPhotos.edges.map(image => (
          <Carousel.Item key={image.node.id}>
            <GatsbyImage
              image={image.node.childImageSharp.gatsbyImageData}
              alt={image.node.base.split(".")[0]}
            />
          </Carousel.Item>
        ))}
      </Carousel>
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
            gatsbyImageData(layout: CONSTRAINED, height: 600)
          }
        }
      }
    }
  }
`
