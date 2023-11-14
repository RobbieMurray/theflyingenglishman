import * as React from "react"
import { Link } from "gatsby"
import { menuItems } from "../../constants/links"
import { FooterStyles, FooterMenuStyles, CopyrightStyles } from "./FooterStyles"
import {
  FaTiktok,
  FaInstagram as Instagram,
  FaYoutube as Youtube,
} from "react-icons/fa"
import { UseSiteMetadata } from "../Hooks/useSiteMetadata"

const Footer = () => {
  const siteMeta = UseSiteMetadata()
  return (
    <FooterStyles style={{ marginBottom: 0 }} className="section">
      <div className="container container__tight">
        <FooterMenuStyles className="footer__menu">
          <ul>
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path} activeClassName="menu__item--active">
                    {item.text}
                    <span>.</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </FooterMenuStyles>

        {siteMeta.tiktokUsername ||
        siteMeta.instagramUsername ||
        siteMeta.youtubeUsername ? (
          <FooterMenuStyles className="footer__menu social__menu">
            <ul>
              {siteMeta.instagramUsername && (
                <li>
                  <a
                    href={`https://www.instagram.com/${siteMeta.instagramUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                    aria-label="Instagram profile"
                  >
                    <Instagram />
                  </a>
                </li>
              )}
              {siteMeta.youtubeUsername && (
                <li>
                  <a
                    href={`https://youtube.com/@${siteMeta.youtubeUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                    aria-label="YouTube profile"
                  >
                    <Youtube />
                  </a>
                </li>
              )}
              {siteMeta.tiktokUsername && (
                <li>
                  <a
                    href={`https://tiktok.com/@${siteMeta.youtubeUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                    aria-label="TikTok profile"
                  >
                    <FaTiktok />
                  </a>
                </li>
              )}
            </ul>
          </FooterMenuStyles>
        ) : (
          ""
        )}
      </div>
      <CopyrightStyles>
        <div className="container container__tight">
          <p>
            Designed & Developed by The Flying Englishman
            <span>.</span>
          </p>
        </div>
      </CopyrightStyles>
    </FooterStyles>
  )
}

export default Footer
