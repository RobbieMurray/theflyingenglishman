import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const social = "30px"

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      padding: `0.8rem`,
      background: `white`,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <ul
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        listStyleType: "none",
        padding: "0.5rem",
        width: "200px",
      }}
    >
      <li>
        <a href="https://www.instagram.com/the_flying_englishman/">
          <StaticImage
            src="../images/instagram.svg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="instagram logo"
            style={{ "max-width": social }}
          />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UClvy8yjhU3qdzTdtvBMrkEQ">
          <StaticImage
            src="../images/youtube.svg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="youtube logo"
            style={{ "max-width": social }}
          />
        </a>
      </li>
      <li>
        <a href="https://www.tiktok.com/@the_flying_englishman">
          <StaticImage
            src="../images/tik-tok.svg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="tiktok logo"
            style={{ "max-width": social }}
          />
        </a>
      </li>
      <li>
        <a href="https://vsco.co/the-flying-englishman/gallery">
          <StaticImage
            src="../images/vsco.svg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="tiktok logo"
            style={{ "max-width": social }}
          />
        </a>
      </li>
    </ul>
    © {new Date().getFullYear()}, the flying englishman
  </footer>
)

export default Footer
