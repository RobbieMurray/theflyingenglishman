import * as React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./header.css"
import styled, { createGlobalStyle } from "styled-components"
import { device } from "./device"

const Global = createGlobalStyle`
  body{
    overflow-x:hidden; 
    overflow-y:${({ nav }) => (nav ? "hidden" : "visible")}; 
  }
`
const BLK = "#2c2c2c"

const MenuIcon = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;
  transition: transform 300ms;
  transform: ${({ nav }) => (nav ? "translateX(100%)" : "translateX(0)")};

  div {
    width: 1.5rem;
    height: 0.2rem;
    background: ${BLK};
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
    transition: opacity 300ms, transform 300ms;

    :first-child {
      transform: ${({ nav }) => (nav ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  @media ${device.mobileL} {
    display: none;
    cursor: default;
    z-index: -1;
  }
`
const MenuLinks = styled.nav`
  height: 100vh;
  width: 100%;
  color: ${BLK};
  position: absolute;
  top: 0;
  right: 0;
  z-index: ${({ nav }) => (nav ? "3" : "-1")};

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    padding: 1rem;
    height: 100vh;
    width: 100%;
    text-align: center;
    color: ${BLK};
    background: white;
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 300ms;
    transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(-100%)")};
  }

  li {
    margin-top: 1rem;
  }

  .nav-item {
    color: ${BLK};
    text-decoration: "none";
    transition: color 300ms;

    :hover {
      color: gray;
      text-decoration: "none";
      text-style: "none";
    }
    :focus {
      color: gray;
      text-decoration: "none";
      text-style: "none";
    }
  }
  @media ${device.mobileL} {
    transform: translateX(0);
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
    background: transparent;
    z-index: 3;

    ul {
      transform: translateX(0);
      height: auto;
      width: auto;
      flex-direction: row;
      justify-content: right;
      align-items: right;
      padding: 1rem;
      background: transparent;
    }
    li {
      padding: 1rem;
    }
  }
`

const Header = ({ siteTitle }) => {
  const [nav, showNav] = useState(false)

  return (
    <header>
      <Global nav={nav} />
      <div className="div-title">
        <MenuIcon
          className="menu-icon mobile"
          onClick={() => showNav(!nav)}
          nav={nav}
        >
          <div />
          <div />
          <div />
        </MenuIcon>

        <Link to="/" className="short-logo tablet">
          <StaticImage
            className="short-logo tablet"
            src="../images/tfe.svg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="the flying englishman logo"
            layout="constrained"
          />
        </Link>

        <Link to="/" className="logo desktop title">
          <h1 className="title">{siteTitle}</h1>
          {/* <StaticImage
            className="logo desktop"
            src="../images/tfe.svg"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="the flying englishman logo"
            layout="constrained"
            quality={50}
          /> */}
        </Link>

        <MenuLinks nav={nav}>
          <ul>
            <li className="mobile">
              <Link className="nav-item mobile" to="/">
                Home
              </Link>{" "}
              <br />
            </li>
            <li>
              <Link className="nav-item" to="/about/">
                About
              </Link>{" "}
              <br />
            </li>
            <li>
              <Link className="nav-item" to="/gear/">
                Gear
              </Link>{" "}
              <br />
            </li>
            <li>
              <Link className="nav-item" to="/contact/">
                Contact
              </Link>{" "}
              <br />
            </li>
          </ul>
        </MenuLinks>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
