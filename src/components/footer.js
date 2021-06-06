import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./footer.css"

const social = "30px"

const Footer = ({ siteTitle }) => (
  <footer>
    <ul className="social-list">
      <li>
        <a href="https://www.instagram.com/the_flying_englishman/">
          <p className="social">Instagram</p>
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
          <p className="social">Youtube</p>
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
          <p className="social">TikTok</p>
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
          <p className="social">VSCO</p>
          {/* <StaticImage
            className="logo"
            src="../images/vsco.svg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="tiktok logo"
            style={{ "max-width": social }}
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
