import * as React from "react"
import GlobalStyle from "../styles/globalstyles"
import "../styles/footer.css"
import styled from "styled-components"
import { device } from "./device"

// mobileS: "320px",
//   mobileM: "375px",
//   mobileL: "425px",

const Social = styled.p`
  padding: 1em;

  @media ${device.mobileS} {
    padding: 1em 1.5em;
  }
  @media ${device.mobileM} {
    padding: 1em 2em;
  }
  @media ${device.mobileL} {
    padding: 1em;
  }
`

const Footer = ({ siteTitle }) => (
  <footer>
    <GlobalStyle />
    <ul className="social-list">
      <li>
        <a href="https://www.instagram.com/the_flying_englishman/">
          <Social className="social">Instagram</Social>
          {/* <StaticImage
            className="logo"
            src="../images/instagram.svg"
            alt="instagram logo"
            width={40}
            height={40}
          /> */}
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UClvy8yjhU3qdzTdtvBMrkEQ">
          <Social className="social">Youtube</Social>
          {/* <StaticImage
            className="logo"
            src="../images/youtube.svg"
            alt="youtube logo"
            width={40}
            height={40}
          /> */}
        </a>
      </li>
      <li>
        <a href="https://www.tiktok.com/@the_flying_englishman">
          <Social className="social">TikTok</Social>
          {/* <StaticImage
            className="logo"
            src="../images/tiktok.svg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="tiktok logo"
            style={{ "max-width": social }}
          /> */}
        </a>
      </li>
      <li>
        <a href="https://vsco.co/the-flying-englishman/gallery">
          <Social className="social">VSCO</Social>
          {/* <StaticImage
            className="logo"
            src="../images/vsco.svg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="tiktok logo"
          /> */}
        </a>
      </li>
    </ul>
    <p className="copywrite">
      © {new Date().getFullYear()}. the flying englishman
    </p>
  </footer>
)

export default Footer
