import * as React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled, { createGlobalStyle } from "styled-components"
import { device } from "./device"

const MenuViewLock = createGlobalStyle`
  body{
    overflow-y:${({ nav }) => (nav ? "hidden" : "visible")}; 
    
  }
`
const BLK = "#2c2c2c"

const HeaderContainer = styled.header`
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  list-style-type: "";
  width: 100%;
  text-decoration: "none";
  height: auto;

  .logo {
    display: none;
  }

  .short-logo {
    max-height: 60px;
    max-width: 60px;
    transform: translateX(20%);
  }

  @media ${device.mobileL} {
    justify-content: space-around;
    display: flex;
    flex-direction: row;
    align-items: streched;

    .nav {
      width: auto;
      height: auto;
    }

    button,
    .mobile,
    .menu-icon {
      display: none;
    }

    .short-logo {
      max-height: 60px;
      max-width: 60px;
      transform: translateX(0);
    }
  }

  @media ${device.tablet} {
    .logo {
      display: contents;
      color: #2c2c2c;
      justify-content: center;
      align-items: center;
      text-align: center;
      z-index: 3;
    }

    .title {
      padding-left: 1em;
      font-size: 1.5em;
      white-space: nowrap;
    }
  }

  @media ${device.laptop} {
    .title {
      padding-left: 1.2em;
      font-size: 1.6em;
    }

    .nav-item {
      padding: 1.2em;
    }
  }

  @media ${device.laptopL} {
    .title {
      padding-left: 1.2em;
      font-size: 1.8em;
    }

    .nav-item {
      padding: 1.5em;
    }
  }
`

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
      transform: ${({ nav }) => (nav ? "translateX(-250%)" : "translateX(0)")};
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
const MenuLinks = styled.div`
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
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
    background: transparent;
    z-index: 3;

    ul {
      transform: translateX(0);
      height: auto;
      width: auto;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      padding: 0;

      background: transparent;
      margin: 0;
    }
    li {
      padding: 0 1rem;
      margin: 0;
    }
  }
`

const Header = ({ siteTitle }) => {
  const [nav, showNav] = useState(false)

  return (
    <HeaderContainer>
      <MenuViewLock nav={nav} />
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

      <Link to="/" className="logo tablet title">
        <h1 className="title" style={{}}>
          {siteTitle}
        </h1>
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
        <ul className="nav">
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
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
