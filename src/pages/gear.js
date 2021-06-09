import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import { device } from "../components/device"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #2c2c2c;
  padding: 1em 2em;

  h1 {
    justify-self: flex-start;
    align-self: start;
  }

  ul {
    padding: 1em;
  }

  @media ${device.tablet} {
    padding: 1em 3em;
  }

  @media ${device.laptopL} {
    padding: 1em 4em;
  }
`

const Gear = () => (
  <Layout>
    <Seo title="Gear" />
    <Container>
      <h1>Gear List:</h1>
      <ul>
        <li>
          Go Pro HERO 9 |
          <a href="https://amzn.to/3pzqkCv" alt="link to buy go pro hero 9">
            Buy
          </a>
        </li>
        <li>
          Sandisk 256GB Micro SD Card |
          <a href="https://amzn.to/3ilg67h" alt="link to buy sd card">
            Buy
          </a>
        </li>
        <li>
          Go Pro HERO 9 Media Mod |
          <a href="https://amzn.to/34TjNcf" alt="link to buy go pro media mod">
            Buy
          </a>
        </li>
        <li>
          Go Pro El Grande Pole |
          <a
            href="https://amzn.to/34TjNcf"
            alt="link to buy go pro el grande pole"
          >
            Buy
          </a>
        </li>
        <li>Polar Pro ND filters | </li>
        <li>Senheizer MKE 200 Shotgun Mic | </li>
        <li>
          Mophie Powerstation Mini |
          <a href="https://amzn.to/34W1gvS" alt="link to buy powerbank">
            Buy
          </a>
        </li>
        <li>
          DJI Air 2s Fly More Combo |
          <a href="https://amzn.to/34UGywI" alt="link to buy dji air 2s drone">
            Buy
          </a>
        </li>
      </ul>
    </Container>
  </Layout>
)

export default Gear
