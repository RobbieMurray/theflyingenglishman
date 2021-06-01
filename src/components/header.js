import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      padding: `0.8rem`,
      background: `white`,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        listStyleType: "none",
        padding: "0.5rem",
        width: "500px",
        textDecoration: "none",
      }}
    >
      <StaticImage src="../images/TFE.png" width="0px" height="0px" />
      <h1>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            fontfamily: `montserrat`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <ul
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        listStyleType: "none",
        padding: "0.5rem",
        width: "300px",
        textDecoration: "none",
      }}
    >
      <li style={{ textDecoration: "none" }}>
        <Link to="/about/" style={{ textDecoration: "none" }}>
          About
        </Link>{" "}
        <br />
      </li>
      <li>
        <Link to="/gear/">Gear</Link> <br />
      </li>
      <li>
        <Link to="/contact/">Contact</Link> <br />
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
