import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi</h1>
    <p>My name is Robbie and I like to ski and film</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
