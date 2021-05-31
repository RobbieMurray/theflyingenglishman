import * as React from "react"

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      marginTop: `2rem`,
    }}
  >
    © {new Date().getFullYear()}, Built with Love
  </footer>
)

export default Footer
