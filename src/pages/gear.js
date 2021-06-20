import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import { device } from "../components/device"
import { StaticImage } from "gatsby-plugin-image"

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
    margin: 0;
  }

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0.3em 0;
  }

  .gearimg {
    width: 100px;
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
          <StaticImage
            src="../images/gear/gopro.jpg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="go pro hero 9"
            layout="constrained"
            margin="150px"
            className="gearimg"
          />
          Go Pro HERO 9 |{" "}
          <a href="https://amzn.to/3pzqkCv" alt="link to buy go pro hero 9">
            {" "}
            Buy
          </a>
        </li>
        <li>
          <StaticImage
            src="../images/gear/sdcard.jpg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="sd card"
            layout="constrained"
            margin="150px"
            className="gearimg"
          />
          Sandisk 256GB Micro SD Card |{" "}
          <a href="https://amzn.to/3ilg67h" alt="link to buy sd card">
            Buy
          </a>
        </li>
        <li>
          <StaticImage
            src="../images/gear/mediamod.jpg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="media mod"
            layout="constrained"
            margin="150px"
            className="gearimg"
          />
          Go Pro HERO 9 Media Mod |{" "}
          <a href="https://amzn.to/34TjNcf" alt="link to buy go pro media mod">
            Buy
          </a>
        </li>
        <li>
          <StaticImage
            src="../images/gear/elgrande.jpg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt=""
            layout="constrained"
            margin="150px"
            className="gearimg"
          />
          Go Pro El Grande Pole |{" "}
          <a
            href="https://amzn.to/2TzEpnp"
            alt="link to buy go pro el grande pole"
          >
            Buy
          </a>
        </li>
        <li>
          <StaticImage
            src="../images/gear/polarpro.png"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="the flying englishman filming"
            layout="constrained"
            margin="150px"
            className="gearimg"
          />
          Polar Pro ND Filters |{" "}
          <a
            href="https://www.polarprofilters.com/collections/filters/products/hero9-nd-filters"
            alt="link to buy polar pro nd filters for gopro hero 9"
          >
            Buy
          </a>
        </li>
        <li>
          <StaticImage
            src="../images/gear/mke200.jpg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="the flying englishman filming"
            layout="constrained"
            margin="150px"
            className="gearimg"
          />
          Sennheiser MKE 200 Microphone |{" "}
          <a
            href="https://amzn.to/3xpT9DY"
            alt="link to buy Sennheiser MKE 200 Shotgun microphone"
          >
            Buy
          </a>
        </li>
        <li>
          <StaticImage
            src="../images/gear/batterypack.jpg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="batterypack"
            layout="constrained"
            margin="150px"
            className="gearimg"
          />
          Mophie Powerstation Mini |{" "}
          <a href="https://amzn.to/34W1gvS" alt="link to buy powerbank">
            Buy
          </a>
        </li>
        <li>
          <StaticImage
            src="../images/gear/drone.jpg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="dji air 2s drone"
            layout="constrained"
            margin="150px"
            className="gearimg"
          />
          DJI Air 2s Fly More Combo |{" "}
          <a href="https://amzn.to/34UGywI" alt="link to buy dji air 2s drone">
            Buy
          </a>
        </li>
      </ul>
    </Container>
  </Layout>
)

export default Gear
