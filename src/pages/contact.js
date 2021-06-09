import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { device } from "../components/device"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Container = styled.div`
  padding: 1em 2em;

  @media ${device.tablet} {
    padding: 1em 3em;
  }

  @media ${device.laptopL} {
    padding: 1em 4em;
  }
`

const Contact = () => (
  <Layout>
    <Seo title="Contact" />
    <Container>
      <h1>Contact form coming soon</h1>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
)

export default Contact
