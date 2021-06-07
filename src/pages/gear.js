import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/global.css"

const Gear = () => (
  <Layout>
    <Seo title="Gear" />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        color: "#2c2c2c",
      }}
    >
      <h1>Gear List:</h1>
      <ul>
        <li>
          <a href="https://amzn.to/3pzqkCv" alt="link to buy go pro hero 9">
            Go Pro HERO 9
          </a>
        </li>
        <li>
          <a href="https://amzn.to/3ilg67h" alt="link to buy sd card">
            Sandisk 256GB Micro SD Card
          </a>
        </li>
        <li>
          <a href="https://amzn.to/34TjNcf" alt="link to buy go pro media mod">
            Go Pro HERO 9 Media Mod
          </a>
        </li>
        <li>
          <a
            href="https://amzn.to/34TjNcf"
            alt="link to buy go pro el grande pole"
          >
            Go Pro El Grande Pole
          </a>
        </li>
        <li>Polar Pro ND filters</li>
        <li>Senheizer MKE 200 Shotgun Mic</li>
        <li>
          <a href="https://amzn.to/34W1gvS" alt="link to buy powerbank">
            Mophie Powerstation Mini
          </a>
        </li>
        <li>
          <a href="https://amzn.to/34UGywI" alt="link to buy dji air 2s drone">
            DJI Air 2s Fly More Combo
          </a>
        </li>
      </ul>
    </div>
  </Layout>
)

export default Gear
